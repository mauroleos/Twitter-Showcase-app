const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("/api/statuses", function (req, res) {
  res.send(statuses);
});

app.listen(port, () => console.log(`server started on port ${port}`));
