const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    descriptions: { type: string, required: true, unique },
    img: { type: String, require: true },
    catagories: { type: String, require: true },
    size: { type: String, require: true },
    color: { type: String, require: true },
    prize: { type: String, require: true },
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", ProductSchema);
