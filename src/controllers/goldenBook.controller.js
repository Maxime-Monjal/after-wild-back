const express = require("express");
const connection = require("../../config/config");

const router = express.Router();

router.get("/", (req, res) => {
  connection.query("SELECT post from wilder", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

router.post("/", (req, res) => {
  const { post } = req.body.post;
  connection.query(
    `INSERT INTO wilder ( post) VALUES ( ?)`,
    [post],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else if (result.length === 0) {
        response.sendStatus(404);
      } else {
        res.status(200).json(result);
      }
    }
  );
});

module.exports = router;
