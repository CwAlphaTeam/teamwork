"use strict";
/* ====================================================== */
/*               MONGODB Connection Mongoose              */
/* ====================================================== */
const mongoose = require("mongoose");

const MONGODB = process.env.MONGODB;
mongoose
  .connect(MONGODB)
  .then(() => console.log("DB Connecteddddddd!"))
  .catch((err) => console.log("DB Not Connected!", err));
