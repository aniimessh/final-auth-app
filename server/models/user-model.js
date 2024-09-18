const mongoose = require("mongoose");

// Define the user schema

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    userType: {
      type: String,
      enum: ["user", "seller", "admin"],
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePic: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
    },
    mobileNo: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Create a model from the schema
const User = mongoose.model("User", userSchema, "user");

module.exports = { User };
