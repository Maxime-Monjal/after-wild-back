const express = require("express");
const connection = require("../../config/config");

const router = express.Router();

router.get("/:id", (req, res) => {
  connection.query(
    `SELECT * FROM wilder WHERE idwilders = ?`,
    [req.params.id],
    (error, result) => {
      if (error) {
        res.status(500).send(error);
      } else if (result.length === 0) {
        res.sendStatus(404);
      } else {
        res.status(200).json(result[0]);
      }
    }
  );
});

module.exports = router;
