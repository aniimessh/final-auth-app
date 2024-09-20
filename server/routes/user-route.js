const express = require("express");
const {
  getUserById,
  updateUserDetails,
} = require("../controllers/user-controller");


const router = express.Router();

router.get("/me", getUserById);

router.put("/update-user", updateUserDetails);


module.exports = router;
