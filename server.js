if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY;
const axios = require("axios");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/weather", (req, res) => {
  const url = `https://api.darksky.net/forecast/07c5275b8f06cffd9b651da34363fbc7/37.8267,-122.4233/${req.body.latitude},${req.body.longitude}?units=auto`;
  axios({
    url: url,
    responseType: "json"
  }).then(data => res.json(data.data.currently));
});

app.listen(5000, () => {
  console.log("Server Started");
});
