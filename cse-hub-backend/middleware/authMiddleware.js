// authMiddleware.js
const apiKeyAuthMiddleware = (req, res, next) => {
  const apiKey = req.header("Authorization");

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: "Unauthorized access, invalid API key" });
  }

  next();
};

export default apiKeyAuthMiddleware;
