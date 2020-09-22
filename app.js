const express = require("express");
const fetch = require("node-fetch");
const app = express();
const path = require("path");
let port = process.env.PORT || 3000;

// const access_token = "AAAAAAAAAAAAAAAAAAAAAJBgHgEAAAAAiyoNTAGGwbth1jMT05cOnJXFv6Y%3DGGW96OfGERoOvSQ1TyRIam79asCJQPC8352nuayWhwWL5bOHUE"

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/api/statuses", function (req, res) {
  const fakeTweets = [
    { text: "some tweet:", username: "elonmusk" },
    { text: "another tweet:", username: "elonmusk" },
  ];
  res.send(fakeTweets);
});

fetch("/api/statuses")
  .then((resp) => resp.json()) // Transform the data into json
  .then(function (data) {
    console.log(data);
  });

app.listen(port, () => console.log(`server started on port ${port}`));
