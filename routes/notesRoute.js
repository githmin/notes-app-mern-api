const express = require("express");
const note = require("../models/Notes");
const router = express.Router();

router.post("/", async (req, res, next) => {
  const newNote = new note({
    note: req.body.note,
    // userId: req.body.userId,
  });
  await newNote
    .save()
    .then(res.status(200).json("Successfully saved the note"))
    .catch(res.status(500));
});

module.exports = router;
