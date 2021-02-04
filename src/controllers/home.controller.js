const express = require("express");
const connection = require("../../config/config");

const router = express.Router();

router.get("/", (req, res) => {
  connection.query("SELECT * from wilders", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
