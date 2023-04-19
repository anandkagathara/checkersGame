const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  playerInfo: {
    type: Array,
  },
  board: {
    type: Array,
  },
  winnerId: {
    type: String,
  },
  maxPlayerLength: {
    type: Number,
  },
  activePlayerLength: {
    type: Number,
  },
});

const game = mongoose.model("game", gameSchema);
module.exports = game;
