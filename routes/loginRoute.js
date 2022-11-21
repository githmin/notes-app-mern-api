const express = require("express");
const router = express.Router();
const User = require("../models/Users");

router.post("/", async (req, res, next) => {
  console.log(req.body);
  const newLogin = await User.findOne({ username: req.body.username });
  if (newLogin === undefined || newLogin === null) {
    res.json({ status: "Incorrect" });
  } else if (newLogin.password === req.body.password) {
    res.status(200).json({ redirectTo: "/dashboard" });
  }
});

module.exports = router;
