require("dotenv").config();
const fs = require("fs");
const path = require("path");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const carsRouter = require("./routes/api/cars");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/cars", carsRouter);

const staticPath = path.resolve(`${__dirname}/../client/build`);
app.use(express.static(staticPath));

app.get("*", (req, res) => {
  res.write(fs.readFileSync(`${__dirname}/../client/build/index.html`));
  res.end();
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;
