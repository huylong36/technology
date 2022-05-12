const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CategorySchema = new Schema(
  {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    viewer: {
      type: Number,
    },
    slug: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("category", CategorySchema);
