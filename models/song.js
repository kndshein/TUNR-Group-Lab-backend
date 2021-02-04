const { Schema, model } = require("mongoose");

const songSchema = new Schema ({
    name: String,
    artist: String,
    album: String,
    time: Number
})

const Song = model('Song', songSchema)

module.exports = Song