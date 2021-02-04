const router = require("express").Router();

const home = require("../controllers/home.controller");

router.use("/", home);

module.exports = router;
