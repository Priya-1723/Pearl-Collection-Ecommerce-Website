const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
    },

    category: [
      {
        type: String,
      },
    ],

    pattern: {
      type: String,
    },

    occasion: {
      type: String,
    },

    size: [
      {
        type: String,
      },
    ],

    imageurl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
