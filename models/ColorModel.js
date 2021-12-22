const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  position: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
  },
  backgroundColor: {
    type: String,
  },
  tamam: {
    type: Boolean,
  },
  answer: {
    type: String,
  },
  id: {
    type: Number,
  },
});

module.exports = mongoose.model("ColorStore", colorSchema);
