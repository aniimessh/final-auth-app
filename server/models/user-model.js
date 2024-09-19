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
      default: "user",
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
      default: null,
    },
    primaryMobileNo: {
      type: String,
      default: null,
    },
    secondaryMobileNo: {
      type: String,
      default: null,
    },
    addresses: [
      {
        street: {
          type: String,
        },
        city: {
          type: String,
        },
        state: {
          type: String,
        },
        zip: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Create a model from the schema
const User = mongoose.model("User", userSchema, "user");

module.exports = { User };
