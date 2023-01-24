const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.post("/ktp", (req, res) => {
  let Nama = req.body.Nama;
  let Alamat = req.body.Alamat;
  let Umur = req.body.Umur;
  let JK = req.body.JK;
  let TTL = req.body.TTL;

  let response = {
    Nama,
    Alamat,
    Umur,
    JK,
    TTL,
  };

  res.json(response);
});

app.listen(8000, () => {
  // Use port 8000
  console.log("Server run on port 8000");
});
