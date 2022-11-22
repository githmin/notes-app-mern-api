const express = require("express");
const note = require("../models/Notes");
const verify = require("../utils/Auth");
const router = express.Router();

router.post("/", verify, async (req, res, next) => {
  const newNote = new note({
    note: req.body.note,
    userId: req.user.id,
  });
  await newNote
    .save()
    .then(res.status(200).json("Successfully saved the note"))
    .catch(res.status(500));
});

router.get("/userid", verify, async (req, res, next) => {
  console.log(req.user);
  res.json(req.user.id);
});

router.post("/delete", verify, async (req, res, next) => {
  console.log(req.body.id);
  await note
    .findByIdAndDelete({ _id: req.body.id })
    .then(res.json("Note Deleted"))
    .catch((e) => {
      console.log(e);
    });
});

router.get("/", verify, async (req, res, next) => {
  const allNotes = await note.find({ userId: req.user.id });
  res.status(200).json(allNotes);
});

module.exports = router;
