const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get((req, res) => {
  res.send("server is running");
});

//database connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected safely to MongoDB via Mongoose"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server spinning on port ${PORT}`));
