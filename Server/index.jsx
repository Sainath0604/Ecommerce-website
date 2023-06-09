const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors"); //middleware
app.use(cors());

//Declaring port

app.listen(5000, () => {
  console.log("server started on port 5000");
});

//MongoDB connection

const mongoose = require("mongoose");
const mongoUrl =
  "mongodb+srv://Sainath:cc1235500@ecommerce.i56dshw.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to Database");
  })
  .catch((e) => console.log(e));
