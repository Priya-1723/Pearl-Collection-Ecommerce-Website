const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // React + Vite frontend
  }),
);
// Middleware must come before routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Debug middleware — temporarily add this
app.use((req, res, next) => {
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Content-Type:", req.headers["content-type"]);
  console.log("Body:", req.body);
  next();
});

// Import product routes
const productRoutes = require("./routes/productRoutes");

// Register product routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

//database connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected safely to MongoDB via Mongoose"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server spinning on port ${PORT}`));
