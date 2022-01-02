const cors = require("cors");
const express = require("express");

const fs = require("fs");

const data = require("./favoriteThings");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json(data);
});

app.get("/:id", (req, res) => {
  let index = req.params.id;
  res.send(data[index]);
});

app.post("/", (req, res) => {
  fs.writeFile("data.js", JSON.stringify(data), (err) => {
    // Catch this!
    if (err) throw err;

    console.log("Users saved!");
  });
  res.send("something has been posted");
});

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
