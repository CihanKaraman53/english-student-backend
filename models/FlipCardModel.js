const mongoose = require("mongoose");

const flipcardSchema = new mongoose.Schema({
  tr: {
    type: String,
  },
  eng: {
    type: String,
  },
  example: {
    type: String,
  },
});

module.exports = mongoose.model("FlipCardStore", flipcardSchema);
