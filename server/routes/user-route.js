const express = require("express");
const {
  getUserById,
  updateUserDetails,
  updateUserAddress,
} = require("../controllers/user-controller");

const router = express.Router();

router.get("/me", getUserById);

router.put("/update-user", updateUserDetails);
router.put("/update-address", updateUserAddress);

module.exports = router;
