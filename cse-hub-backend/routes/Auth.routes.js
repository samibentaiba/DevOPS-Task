//Auth.routes.js

import { Router } from "express";
import { register, login, logout } from "../controllers/Auth.js";
import apiKeyAuthMiddleware from "../middleware/apiKeyAuthMiddleware.js";  // Import the new API Key middleware

const router = Router();

// Public routes
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);

// Protected route using API key authentication
router.get("/profile", apiKeyAuthMiddleware, (req, res) => {
  res.status(200).json({
    message: "This is a protected route, API key validated!",
  });
});

export default router;

