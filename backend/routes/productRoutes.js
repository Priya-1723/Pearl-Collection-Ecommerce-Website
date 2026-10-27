const express = require("express");

const route = express.Router();

const {
  createProduct,
  getAllProducts,
} = require("../controllers/productcontroller");

route.post("/createproduct", createProduct);
route.get("/allproducts", getAllProducts);

module.exports = route;
