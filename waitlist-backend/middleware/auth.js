const config = require("../config");

const authenticateAdmin = (req, res, next) => {
  try {
    const adminKey = req.headers["x-admin-key"];

    if (adminKey !== config.adminKey) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  authenticateAdmin,
};
