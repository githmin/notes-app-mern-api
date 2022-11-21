require("dotenv").config();
const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res, next) => {
  const newLogin = await User.findOne({ username: req.body.username });
  if (newLogin === undefined || newLogin === null) {
    res.status(404);
  } else if (newLogin.password !== req.body.password) {
    res.status(401).json("Invalid Cred");
  } else if (newLogin.password === req.body.password) {
    // Gen an access token
    const accessToken = jwt.sign(
      { id: newLogin._id, isAdmin: newLogin.isAdmin },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.status(200).json({
      id: newLogin._id,
      username: newLogin.username,
      isAdmin: newLogin.isAdmin,
      token: accessToken,
    });
  }
});

module.exports = router;
