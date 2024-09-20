const { Category } = require("../models/categories.-model");
const { Banner } = require("../models/banner-model");

// categories
const addCategoriesHomePage = (req, res) => {
  try {
    const { title, imgUrl } = req.body;

    const newCategory = new Category({
      title,
      imgUrl,
    });
    newCategory.save();
    return res.status(200).json({ message: "Category added successfully" });
  } catch (error) {
    console.log("error in addCategoriesHomePage controller", error.message);
    return res.status(500).json({ error: error.message });
  }
};

const getCategoriesHomePage = async (req, res) => {
  try {
    const categories = await Category.find().select({
      __v: 0,
    });
    const totalCount = categories.length;
    return res.status(200).json({ totalResults: totalCount, categories });
  } catch (error) {
    console.log("error in getCategories controller", error.message);
    return res.status(500).json({ error: error.message });
  }
};

const removeCategoriesHomePage = async (req, res) => {
  try {
    const { id } = req.body;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.log("error in removeCategoriesHomePage controller", error.message);
    return res.status(500).json({ error: error.message });
  }
};

// Banner

const getBanner = async (req, res) => {
  try {
    const slugName = req.query.slug;

    const banner = await Banner.find({ slug: slugName }).select({
      __v: 0,
    });
    return res.status(200).json({ banner });
  } catch (error) {
    console.log("error in getBanner controller", error.message);
    return res.status(500).json({ error: error.message });
  }
};

const addBanner = async (req, res) => {
  try {
    const { imgUrl, slug } = req.body;
    const banner = new Banner({
      imgUrl,
      slug,
    });
    await banner.save();
    return res.status(200).json({ message: "Banner added successfully" });
  } catch (error) {
    console.log("error in addBanner controller", error.message);
    return res.status(500).json({ error: error.message });
  }
};

const removeBanner = async (req, res) => {
  try {
    const { id } = req.body;
    const banner = await Banner.findByIdAndDelete(id);
    if (!banner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    return res.status(200).json({ message: "Banner deleted successfully" });
  } catch (error) {
    console.log("error in removeBanner controller", error.message);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addCategoriesHomePage,
  getCategoriesHomePage,
  removeCategoriesHomePage,
  getBanner,
  addBanner,
  removeBanner,
};
