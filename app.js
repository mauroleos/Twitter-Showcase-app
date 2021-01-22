const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

let port = process.env.PORT || 3000;

const access_token =process.env.TOKEN;

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/statuses", async  (req, res) => {
  const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

try {
  const response = await axios.get(
  `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.search_term}&tweet_mode=extended`,
  config
)
res.send(response.data)
  
} catch (error) {
  res.status(500).json(error);
  }
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

  const username = req.query.username;

  const response = await axios.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${username}&tweet_mode=extended`,
    config
  );

  const randomTweet = response.data[Math.floor(Math.random() * response.data.length)];
  res.send(randomTweet);
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => console.log(`server started on port ${port}`));
