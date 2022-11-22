require("dotenv").config();
const express = require("express");
const app = express();
var cors = require('cors')


const notesRoute = require("./routes/notesRoute");
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");
const navRoute = require("./routes/navRoute");

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
app.use(cors())


// API
app.use("/api/note", notesRoute);
app.use("/api/register", registerRoute);
app.use("/api/login", loginRoute);
app.use("/api/nav", navRoute);



app.listen(process.env.PORT || 3000, () => {
  console.log(`Serving on port ${process.env.PORT}`);
});
