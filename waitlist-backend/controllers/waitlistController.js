const waitlistService = require("../services/waitlistService");

class WaitlistController {
  async addEmail(req, res) {
    try {
      const { email } = req.body;
      const result = await waitlistService.addEmailToWaitlist(email);

      res.status(201).json(result);
    } catch (error) {
      console.error("Error adding to waitlist:", error);

      if (error.message === "Valid email is required") {
        return res.status(400).json({
          success: false,
          message: error.message,
        });
      }

      if (error.message === "Email already registered") {
        return res.status(409).json({
          success: false,
          message: error.message,
        });
      }

      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  async getCount(req, res) {
    try {
      const result = await waitlistService.getWaitlistCount();
      res.json(result);
    } catch (error) {
      console.error("Error getting count:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  async getAllEmails(req, res) {
    try {
      const result = await waitlistService.getAllEmails();
      res.json(result);
    } catch (error) {
      console.error("Error getting emails:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}

module.exports = new WaitlistController();
