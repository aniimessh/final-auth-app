const user = require("../db/models/user");
const bcrypt = require("bcryptjs");
const { generateTokenAndSetCookie } = require("../utils/headers/jwtToken");
const signupUser = async (req, res) => {
  try {
    const { fullName, mobileNo, password, confirmPassword, userType } =
      req.body;

    if (!fullName || !mobileNo || !password || !confirmPassword || !userType) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await user.findOne({ where: { mobileNo } });
    if (existingUser) {
      return res.status(400).json({ message: "Phone number already exists" });
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

    const profileAvatar = `https://api.dicebear.com/9.x/initials/svg?seed=${fullName}`;

    const newUser = await user.create({
      userType,
      fullName,
      profileUrl: profileAvatar,
      mobileNo,
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
    const { mobileNo, password } = req.body;

    if (!mobileNo || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await user.findOne({ where: { mobileNo } });

    if (!existingUser) {
      return res.status(400).json({ message: "Mobile number not found" });
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

const logoutUser = async (req, res) => {
  try {
    res.clearCookie("jwt");
    return res.status(200).json({ message: "user logged out successfully" });
  } catch (error) {
    console.log("error in logout controller", error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { signupUser, signinUser, logoutUser };
