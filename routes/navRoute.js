const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const verify = require("../utils/Auth");

router.get("/", verify, async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json(user.username);
});

module.exports = router;
