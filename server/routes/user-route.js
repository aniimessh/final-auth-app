const express = require("express");
const {
  getUserById,
  updateAddress,
} = require("../controllers/user-controller");

const router = express.Router();

router.get("/me", getUserById);

module.exports = router;
