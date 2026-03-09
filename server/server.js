const connectDB = require("./config/db");
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const User = require("./models/user");

const authRoutes = require("./modules/auth/auth.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "server is running"
  });
});


// to test in browser 

app.get("/register", (req, res) => {
  res.send("Use POST to register a user");
});

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
}) 