const express = require("express");
const note = require("../models/Notes");
const verify = require("../utils/Auth");
const router = express.Router();

router.post("/", verify, async (req, res, next) => {
  console.log(req.body);
  const newNote = new note({
    note: req.body.note,
    userId: req.user.id,
  });
  await newNote
    .save()
    .then(res.status(200).json("Successfully saved the note"))
    .catch(res.status(500));
});

module.exports = router;
