const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");
const documentRoutes = require("./routes/documentRoutes");

const app = express();

mongoose.connect("mongodb://localhost/club", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/documents", documentRoutes);

module.exports = app;
