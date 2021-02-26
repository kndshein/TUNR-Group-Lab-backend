const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const songSchema = new Schema({
  name: String,
  artist: String,
  album: String,
  time: String,
  favorite: { type: Boolean, default: false },
});

const Song = mongoose.model("Song", songSchema);
module.exports = Song;
