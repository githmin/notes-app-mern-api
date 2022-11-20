const mongoose = require("mongoose");

const Note = new mongoose.Schema({
  note: { type: String },
//   userId: { type: Number, required: true },
});

module.exports = mongoose.model("note", Note);
