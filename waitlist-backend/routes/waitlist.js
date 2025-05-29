const express = require("express");
const router = express.Router();
const waitlistController = require("../controllers/waitlistController");
const { authenticateAdmin } = require("../middleware/auth");

// Add email to waitlist
router.post("/", waitlistController.addEmail);

// Get waitlist count
router.get("/count", waitlistController.getCount);

// Get all emails (protected route)
router.get("/emails", authenticateAdmin, waitlistController.getAllEmails);

module.exports = router;
