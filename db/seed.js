const Song = require("../models/song");

const songData = [
  {
    name: "Dead Man's Party",
    artist: "Oingo Boingo",
    album: "Dead Man's Party",
    time: "3:54",
  },
  {
    name: "Hot In Herre",
    artist: "Nelly",
    album: "Nellyville",
    time: "4:04",
  },
];

Song.create(songData)
  .then((songs) => {
    console.log(songs);
  })
  .catch((err) => {
    console.log(err);
  });
