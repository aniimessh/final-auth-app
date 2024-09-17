const express = require("express");

const {
  signupUser,
  signinUser,
  logoutUser,
  signInWithOtp,
  verifyMobileOtp,
} = require("../controllers/auth-controller");

const router = express.Router();

router.post("/signup", signupUser);
router.post("/signin", signinUser);
router.post("/logout", logoutUser);

router.post("/send-otp", signInWithOtp);
router.post("/verify-otp", verifyMobileOtp);

module.exports = router;
