const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors"); //middleware
app.use(cors());

const bcrypt = require("bcrypt"); //For password encryption

const jwt = require("jsonwebtoken");
const JWT_secret = "b6e8b3f89c7d4f2a9d51e8b7af6c3d0e";

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

//Importing schema
require("./models/userSchema.jsx");
const User = mongoose.model("userInfo");

//Register API

app.post("/register", async (req, res) => {
  console.log(req.body);
  const { fName, lName, email, password, userType } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User already exits" });
    }

    await User.create({
      fName,
      lName,
      email,
      password: encryptedPassword,
      userType,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

// Login API

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({
      error: "User does not exits, please register if you haven't",
    });
  }
  if (await bcrypt.compare(password, user.password)) {
    //creates token with secret
    const token = jwt.sign({ email: user.email }, JWT_secret);

    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ status: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Credentials" });
});

// Forgot password API

app.post("/forgotPassword", async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.json({ status: "User does not exists" });
    }
    const secret = JWT_secret + oldUser.password;
    //^^made secret with JWT_SECRET and password
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    //^^created token with email, id and above secret which expires in 5min

    const link = `http://localhost:1555/resetPassword/${oldUser._id}/${token}`;
    console.log(link);
  } catch (error) {
    // res.send({ status: "error" });
    console.log(error);
  }
});
