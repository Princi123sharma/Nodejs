const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfully:");
  })
  .catch((e) => {
    console.log(e);
  });
