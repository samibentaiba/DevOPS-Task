// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { register, login, logout } from "./controllers/Auth.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Apply CORS before any routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.post("/api/auth/register", register);
app.post("/api/auth/login", login); // Ensure this route is correct
app.get("/api/auth/logout", logout);

// Example of a protected route using an API Key
app.get("/api/protected", (req, res) => {
  const apiKey = req.header("Authorization");

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res
      .status(401)
      .json({ message: "Unauthorized access, invalid API key" });
  }

  res
    .status(200)
    .json({ message: "This is a protected route, API key validated!" });
});

// Connect to MongoDB and start the server without deprecated options
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
