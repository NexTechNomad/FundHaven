require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  github: {
    token: process.env.GITHUB_TOKEN,
    gistId: process.env.GIST_ID,
    apiUrl: `https://api.github.com/gists/${process.env.GIST_ID}`,
  },
  adminKey: process.env.ADMIN_KEY,
};
