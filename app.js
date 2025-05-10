// app.js
const express = require("express");
const path = require("path");
const pageRoutes = require("routes\pageRoutes.js");

const app = express();

// In-memory array to store contact form submissions
let contactSubmissions = [];

// Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
); // Parse form data
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

// Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", pageRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Export contactSubmissions for use in routes
module.exports = { contactSubmissions };
