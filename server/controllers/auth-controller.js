// const bcrypt = require("bcryptjs");
const { generateTokenAndSetCookie } = require("../utils/headers/jwtToken");
const { verifyOtp, sendOtpViaMail, generateOtp } = require("../utils/otp");

const { User } = require("../models/user-model");
const { Otp } = require("../models/otp-model");

const { generateAvatar } = require("../utils/utility");

const signInWithOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "email is required" });
    }
    const otp = generateOtp();
    const mailSent = await sendOtpViaMail(email, otp);

    if (!mailSent) {
      return res.status(400).json({ message: "Failed to send OTP" });
    }

    return res.status(200).json({ message: "OTP sent successfully", otp: otp });
  } catch (error) {
    console.log("error in signInWithOtp controller", error.message);
    return res.status(500).json({ error: error.message });
  }
};

const verifyMobileOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const isVerified = await verifyOtp(email, otp);

    if (!isVerified) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    await Otp.findOneAndDelete({ email });

    const newUser = new User({
      email,
      profilePic: generateAvatar(email),
    });
    console.log(newUser);
    await newUser.save();
    const token = generateTokenAndSetCookie(newUser._id, res);

    return res
      .status(200)
      .json({ message: "OTP verified successfully", jwt: token });
  } catch (error) {
    console.log("error in verifyOtp controller", error.message);
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

module.exports = {
  logoutUser,
  signInWithOtp,
  verifyMobileOtp,
};
