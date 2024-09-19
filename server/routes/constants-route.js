const express = require("express");

const {
  addCategoriesHomePage,
  getCategoriesHomePage,
  removeCategoriesHomePage,
  getBanner,
  addBanner,
  removeBanner,
} = require("../controllers/constants-controller");

const router = express.Router();

// categories
router.post("/add-category", addCategoriesHomePage);
router.get("/get-category", getCategoriesHomePage);
router.delete("/delete-category", removeCategoriesHomePage);

// banner
router.get("/get-banner", getBanner);
router.post("/add-banner", addBanner);
router.delete("/remove-banner", removeBanner);

module.exports = router;
