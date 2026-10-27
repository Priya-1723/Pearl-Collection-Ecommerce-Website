const Product = require("../model/Productmodel");

const createProduct = async (req, res) => {
  try {
    const { productname, price, category, pattern, occasion, size, imageurl } =
      req.body;

    // Create a new product
    const product = await Product.create({
      productname,
      price,
      category,
      pattern,
      occasion,
      size,
      imageurl,
    });

    // Send response
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Create product error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.status(200).json({
      success: true,
      message: "successfully fetched all products",
      allProducts,
    });
  } catch (error) {
    console.error("Get all products error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { createProduct, getAllProducts };
