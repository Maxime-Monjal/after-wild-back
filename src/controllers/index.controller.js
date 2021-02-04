const express = require("express");

const router = express.Router();

const home = require("./home.controller");
const profil = require("./profil.controller");

router.use("/", home);
router.use("/profil", profil);

module.exports = router;
