const express = require("express");
const router = express.Router();
const User = require("../models/Users");

router.post("/", async (req, res, next) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });

  await newUser
    .save()
    .then(res.status(200).json("User signup successfull"))
    .catch((e) => res.send(e));
});

module.exports = router;
