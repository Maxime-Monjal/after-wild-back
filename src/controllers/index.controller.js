const express = require("express");

const router = express.Router();

const home = require("./home.controller");
const profil = require("./profil.controller");
const goldenBook = require("./goldenBook.controller");

router.use("/profil", profil);
router.use("/post", goldenBook);
router.use("/", home);

module.exports = router;
