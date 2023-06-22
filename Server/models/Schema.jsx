const mongoose = require("mongoose");

//Schema for User information

const userSchema = new mongoose.Schema(
  {
    fName: { type: String, required: true },
    lName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, required: true },
  },
  {
    collection: "userInfo",
  }
);
mongoose.model("userInfo", userSchema);

//Schema for Product information

const productSchema = new mongoose.Schema({
  pName: { type: String, required: true, unique: true },
  pDescription: { type: String, required: true },
  Price: { type: String, required: true },
  image: {
    data: Buffer,
    contentType: String,
  },
});

mongoose.model("product", productSchema);
