const gistService = require("./gistService");

class WaitlistService {
  async addEmailToWaitlist(email) {
    // Basic validation
    if (!email || !email.includes("@")) {
      throw new Error("Valid email is required");
    }

    // Fetch current emails
    const emails = await gistService.fetchGistContent();

    // Check if email already exists
    const emailExists = emails.some(
      (entry) => entry.email.toLowerCase() === email.toLowerCase()
    );

    if (emailExists) {
      throw new Error("Email already registered");
    }

    // Add new email with timestamp
    const newEntry = {
      email: email.toLowerCase(),
      timestamp: new Date().toISOString(),
      id: Date.now().toString(),
    };

    emails.push(newEntry);

    // Update gist
    await gistService.updateGistContent(emails);

    return {
      success: true,
      message: "Successfully added to waitlist!",
      count: emails.length,
    };
  }

  async getWaitlistCount() {
    const emails = await gistService.fetchGistContent();
    return {
      success: true,
      count: emails.length,
    };
  }

  async getAllEmails() {
    const emails = await gistService.fetchGistContent();
    return {
      success: true,
      emails: emails,
    };
  }
}

module.exports = new WaitlistService();
