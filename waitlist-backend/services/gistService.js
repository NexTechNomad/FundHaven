const config = require("../config");

class GistService {
  constructor() {
    this.githubToken = config.github.token;
    this.githubApiUrl = config.github.apiUrl;
  }

  async fetchGistContent() {
    try {
      const response = await fetch(this.githubApiUrl, {
        headers: {
          Authorization: `token ${this.githubToken}`,
          Accept: "application/vnd.github.v3+json",
        },
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const gist = await response.json();
      const content = gist.files["waitlist-emails.json"].content;
      return JSON.parse(content || "[]");
    } catch (error) {
      console.error("Error fetching gist:", error);
      return [];
    }
  }

  async updateGistContent(emails) {
    try {
      const response = await fetch(this.githubApiUrl, {
        method: "PATCH",
        headers: {
          Authorization: `token ${this.githubToken}`,
          Accept: "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          files: {
            "waitlist-emails.json": {
              content: JSON.stringify(emails, null, 2),
            },
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error updating gist:", error);
      throw error;
    }
  }
}

module.exports = new GistService();
