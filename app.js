const express = require("express");
var request = require("request");
// const fetch = require("node-fetch");
const app = express();
const path = require("path");
const axios = require("axios");
let port = process.env.PORT || 3000;

const access_token =
  "AAAAAAAAAAAAAAAAAAAAAJBgHgEAAAAAiyoNTAGGwbth1jMT05cOnJXFv6Y%3DGGW96OfGERoOvSQ1TyRIam79asCJQPC8352nuayWhwWL5bOHUE";

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/api/statuses", function (req, res) {
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  axios
    .get("https://api.twitter.com/1.1/search/tweets.json?q=nasa", config)
    .then((response) => res.send(response.data))
    .catch((error) => res.sendStatus(500));
});

app.get("/api/statuses/users", function (req, res) {
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  axios
    .get(
      "https://api.twitter.com/1.1/users/show.json?screen_name=elonmusk",
      config
    )
    .then((response) => res.send(response.data))
    .catch((error) => res.sendStatus(500));
});

app.get("/api/statuses/random", function (req, res) {
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  axios
    .get(
      "https://api.twitter.com/1.1/users/show.json?screen_name=elonmusk, https://api.twitter.com/1.1/users/show.json?screen_name=BillGates, https://api.twitter.com/1.1/users/show.json?screen_name=JeffBezos, https://api.twitter.com/1.1/users/show.json?screen_name=KingJames, https://api.twitter.com/1.1/users/show.json?screen_name=Drake"
    )
    .then((response) => res.send(response.data))
    .catch((error) => res.sendStatus(500));
});

app.listen(port, () => console.log(`server started on port ${port}`));
