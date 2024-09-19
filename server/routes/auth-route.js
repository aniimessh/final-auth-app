const express = require("express");

const {
  logoutUser,
  signInWithOtp,
  verifyMobileOtp,
} = require("../controllers/auth-controller");

const router = express.Router();

router.post("/send-otp", signInWithOtp);
router.post("/verify-otp", verifyMobileOtp);
router.post("/logout", logoutUser);

module.exports = router;
