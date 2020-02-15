require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Public assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Routes
app.use(routes);

// MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Start server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
