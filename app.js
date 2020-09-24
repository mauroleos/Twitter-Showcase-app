const express = require("express");
var request = require("request");
// const fetch = require("node-fetch");
const app = express();
const path = require("path");
const axios = require("axios");
let port = process.env.PORT || 3000;

// const access_token = "AAAAAAAAAAAAAAAAAAAAAJBgHgEAAAAAiyoNTAGGwbth1jMT05cOnJXFv6Y%3DGGW96OfGERoOvSQ1TyRIam79asCJQPC8352nuayWhwWL5bOHUE"

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/api/statuses", function (req, res) {
  axios
    .get("https://api.twitter.com/1.1/search/tweets.json")

    .then(function (response) {
      // handle success
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  res.send(" ");
});

app.listen(port, () => console.log(`server started on port ${port}`));
