const express = require("express");
const routes = require("./routes/parts");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/store", routes);

module.exports = app;
