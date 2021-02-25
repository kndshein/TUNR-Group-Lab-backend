const express = require("express");
const router = express.Router();

const Song = require("../models/song.js");

router.get("/", async (req, res) => {
  Song.find({})
    .then((allSongs) => {
      res.json(allSongs);
    })
    .catch((err) => res.json({ status: 400, err: err }));
});

router.post("/", async (req, res) => {
  const song = req.body;
  Song.create(song)
    .then(() => {
      Song.find({})
        .then((allSongs) => {
          res.json(allSongs);
        })
        .catch((err) => res.json({ status: 400, err: err }));
    })
    .catch((err) => res.json({ status: 400, err: err }));
});

router.put("/id/:id", async (req, res) => {
  const song = req.body;
  Song.updateOne({ _id: req.params.id }, song)
    .then(() => {
      Song.find({})
        .then((allSongs) => {
          res.json(allSongs);
        })
        .catch((err) => res.json({ status: 400, err: err }));
    })
    .catch((err) => res.json({ status: 400, err: err }));
});

router.delete("/id/:id", (req, res) => {
  Song.findByIdAndDelete({ _id: req.params.id })
    .then(() => {
      Song.find({})
        .then((allSongs) => {
          res.json(allSongs);
        })
        .catch((err) => res.json({ status: 400, err: err }));
    })
    .catch((err) => res.json({ status: 400, err: err }));
});

module.exports = router;
