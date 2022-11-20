require("dotenv").config();
const express = require("express");
const app = express();

const notesRoute = require("./routes/notesRoute");
const registerRoute = require("./routes/registerRoute");

const mongoose = require("mongoose");

mongoose
  .connect(process.env.mongodb)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// API
app.use("/api/note", notesRoute);
app.use("/api/register", registerRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT, () => {
  console.log(`Serving on port ${process.env.PORT}`);
});
