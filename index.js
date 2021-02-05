const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const SERVER_PORT = process.env.SERVER_PORT || 8080;
const CLIENT_URL = process.env.CLIENT_URL;
const indexRouter = require("./src/router/index.router");

const app = express();

app.use(cors(CLIENT_URL));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", indexRouter);

app.listen(SERVER_PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express server listening on ${SERVER_PORT}`);
  }
});
