const mongoose = require("mongoose");

// Define the OTP schema
const otpSchema = new mongoose.Schema({
  email: String,
  otp: String,
});

// Create a model from the schema
const Otp = mongoose.model("Otp", otpSchema, "otp");

module.exports = { Otp };
