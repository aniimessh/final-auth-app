const express = require("express");

const {
  signupUser,
  signinUser,
  logoutUser,
} = require("../controllers/auth-controller");

const router = express.Router();

router.post("/signup", signupUser);
router.post("/signin", signinUser);
router.post("/logout", logoutUser);

module.exports = router;
