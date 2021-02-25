require("dotenv").config();

const express = require("express");
const app = express();
const logger = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const mongoose = require("./db/connection");
const songRouter = require("./controllers/songController.js");

////// MIDDLEWARE //////
app.use(cors());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/tunatunr", songRouter);

app.get("/", (req, res) => {
  res.json({
    status: 200,
    message: "Tuna Tunr Test Trial",
  });
});

////// ROUTES FOR CONTROLLERS //////

app.listen(PORT, () => console.log(`listening in on port: ${PORT}`));
