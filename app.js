const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use("/static", express.static(path.join(__dirname, client / build)));

app.listen(3000);

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "/public/index.html"));
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
