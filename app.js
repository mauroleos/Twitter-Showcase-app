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

app.get("/api/statuses", (req, res) => {
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  axios
    .get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.search_term}&tweet_mode=extended`,
      config
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch(() => res.sendStatus(500));
});

app.get("/api/users", async (req, res) => {
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  axios
    .get(
      `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${req.query.search_term}&tweet_mode=extended`,
      config
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch(() => res.sendStatus(500));
});

app.get("/api/statuses/random", async (req, res) => {
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  const data = {
    elon: null,
    bill: null,
    jeff: null,
    lebron: null,
    kanye: null,
  };
  const responseElon = await axios.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=elonmusk&tweet_mode=extended`,
    config
  );

  data.elon = responseElon.data.statuses[Math.floor(Math.random() * 19)];

  const responseBill = await axios.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=BillGates&tweet_mode=extended`,
    config
  );

  data.bill = responseBill.data.statuses[Math.floor(Math.random() * 19)];

  const responseJeff = await axios.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=JeffBezos&tweet_mode=extended`,
    config
  );

  data.jeff = responseJeff.data.statuses[Math.floor(Math.random() * 19)];

  const responseKing = await axios.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=KingJames&tweet_mode=extended`,
    config
  );

  data.lebron = responseKing.data.statuses[Math.floor(Math.random() * 19)];

  const responseKanye = await axios.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=kanyewest&tweet_mode=extended`,
    config
  );

  data.kanye = responseKanye.data.statuses[Math.floor(Math.random() * 19)];

  res.send(data);
});

app.listen(port, () => console.log(`server started on port ${port}`));
