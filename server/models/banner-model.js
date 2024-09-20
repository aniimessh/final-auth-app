const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  imgUrl: {
    type: String,
  },
  slug: {
    type: String,
  },
});

const Banner = mongoose.model("Banner", bannerSchema, "banner");

module.exports = { Banner };
