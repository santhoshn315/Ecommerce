const express = require("express");
const ErrorMiddleware = require("./Miidleware/error");
const app = express();

app.use(express.json());
//Route imports
const product = require("./Routes/ProductRoute");
app.use("/api/v1", product);

//middleware for error
app.use(ErrorMiddleware);

module.exports = app;
