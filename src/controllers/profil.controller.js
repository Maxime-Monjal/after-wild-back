const express = require("express");
const connection = require("../../config/config");

const router = express.Router();

router.get("/:id", (req, res) => {
  connection.query(
    "SELECT * from wilders WHERE idwilders = ?",
    [req.params.id],
    (err, results) => {
      if (err) {
        res.status(500).json(err);
      } else if (results.length < 1) {
        res.status(404).send("Désolé mais ce wilder n'existe pas!");
      } else {
        res.status(200).json(results[0]);
      }
    }
  );
});

module.exports = router;
