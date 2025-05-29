const express = require("express");
const cors = require("cors");
const config = require("./config");
const routes = require("./routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", routes);

// Start server
app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
