const { where } = require("sequelize");
const user = require("../db/models/user");
const bcrypt = require("bcryptjs");
const { generateTokenAndSetCookie } = require("../utils/headers/jwtToken");
const signupUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword, userType } =
      req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !confirmPassword ||
      !userType
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await user.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    if (userType !== "user" && userType !== "seller") {
      return res.status(400).json({ message: "Invalid user type" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await user.create({
      userType,
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    if (!newUser) {
      return res.status(400).json({ message: "failed to create user" });
    }
    console.log("newuser ", newUser.dataValues.id);

    return res.status(201).json({
      message: "User created successfully",
      userId: newUser.dataValues.id,
    });
  } catch (error) {
    console.log("error in signup controller", error.message);
    return res.status(500).json({ error: error.message });
  }
};

const signinUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await user.findOne({ where: { email } });

    if (!existingUser) {
      return res.status(400).json({ message: "Email not found" });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateTokenAndSetCookie(existingUser.dataValues.id, res);

    return res.status(200).json({
      message: "user logged in successfully",
      jwtToken: token,
      userId: existingUser.dataValues.id,
    });
  } catch (error) {
    console.log("error in signin controller", error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { signupUser, signinUser };
