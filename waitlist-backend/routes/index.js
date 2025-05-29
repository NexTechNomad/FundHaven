const express = require("express");
const router = express.Router();
const waitlistRoutes = require("./waitlist");

// Health check route
router.get("/", (req, res) => {
  res.json({ message: "FundHaven Waitlist Backend is running!" });
});

// Waitlist routes
router.use("/api/waitlist", waitlistRoutes);

module.exports = router;
