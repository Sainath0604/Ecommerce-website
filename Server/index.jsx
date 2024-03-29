const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors"); //middleware
app.use(cors());

const bcrypt = require("bcrypt"); //For password encryption

const jwt = require("jsonwebtoken");
const JWT_secret = "b6e8b3f89c7d4f2a9d51e8b7af6c3d0e";

app.set("view engine", "ejs"); //For representing node UI

app.use(express.urlencoded({ extended: false }));
// ^^Parsing of URL-encoded form data in routes and access the form data via req.body
// ^^set to false, it uses the built-in Node.js querystring library to parse the data

const nodemailer = require("nodemailer");

const multer = require("multer"); //For updloading image
const upload = multer();

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

//Importing User schema
require("./models/Schema.jsx");
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
      return res.json({ status: "ok", data: token, userType: user.userType });
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

    const link = `http://localhost:5000/resetPassword/${oldUser._id}/${token}`;
    console.log(link);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "pspatilsai64@gmail.com",
        pass: "wfxoyorfqxmlnofv",
      },
    });

    const mailOptions = {
      from: "youremail@gmail.com",
      to: email,
      subject: "Password reset ",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    // res.send({ status: "error" });
    console.log(error);
  }
});

// Reset password API (get)

app.get("/resetPassword/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  //verfy id
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User does not exists" });
  }
  const secret = JWT_secret + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "verified" });
  } catch (error) {
    res.send("Not verified");
    console.log(error);
  }
});

// Reset password API (post)

app.post("/resetPassword/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  //verfy id
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User does not exists" });
  }
  const secret = JWT_secret + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPassword,
        },
      }
    );
    // res.json({ status: "Password updated" });

    res.render("index", {
      email: verify.email,
      status: "verifiedWithUpdatedPass",
    });
  } catch (error) {
    res.json({ status: "Something went wrong" });
    console.log(error);
  }
});

// User data API

app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_secret);
    const userEmail = user.email;

    User.findOne({ email: userEmail })
      .then((data) => {
        res.send({ staus: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {
    res.send({ satus: "error" });
  }
});

//Get All users API

app.get("/getAllUser", async (req, res) => {
  try {
    const allUser = await User.find({});
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
});

// Delete user API

app.post("/deleteUser", async (req, res) => {
  const { userid } = req.body;
  try {
    await User.deleteOne({ _id: userid }),
      function (err, res) {
        console.log(err);
      };
    res.send({ status: "ok", data: "User deleted from database" });
  } catch (error) {
    console.log(error);
  }
});

// Edit user API

app.post("/editUser", async (req, res) => {
  const { userid, newfName, newlName, newEmail } = req.body;
  try {
    await User.updateOne(
      { _id: userid },
      { fName: newfName, lName: newlName, email: newEmail }
    );
    res.send({ status: "ok", data: "User information updated" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ status: "error", message: "Failed to update user information" });
  }
});

//Importing Product schema

const Product = mongoose.model("product");

//Upload Product information API

app.post("/uploadProduct", upload.single("product"), async (req, res) => {
  try {
    const { pName, pDescription, Price } = req.body;
    const { buffer, mimetype } = req.file;

    const newProduct = new Product({
      pName,
      pDescription,
      Price,
      image: {
        data: buffer.toString("base64"),
        contentType: mimetype,
      },
    });

    await newProduct.save();

    res.send({ status: "ok", data: "Product uploaded successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ status: "error", message: "Failed to upload Product." });
  }
});

//Retrieve Product information API

app.get("/getProductInfo", async (req, res) => {
  try {
    const products = await Product.find();

    const processedProduct = products.map((product) => ({
      _id: product._id,
      pName: product.pName,
      pDescription: product.pDescription,
      Price: product.Price,
      image: {
        contentType: product.image.contentType,
        data: `data:${product.image.contentType};base64,${product.image.data}`,
      },
    }));

    res.json(processedProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "error",
      message: "Failed to retrieve product information.",
    });
  }
});

// Delete product information API

app.post("/deleteProductInfo", async (req, res) => {
  const { productId } = req.body;
  try {
    await Product.deleteOne({ _id: productId }),
      function (err, res) {
        console.log(err);
      };
    res.send({ status: "ok", data: "Product Info deleted" });
  } catch (error) {
    console.log(error);
    res.send({ status: "error", data: "Failed to delete product Info" });
  }
});

// Edit product API

app.post("/editProductInfo", upload.single("product"), async (req, res) => {
  const { productId, pName, pDescription, Price } = req.body;

  if (!productId) {
    return res
      .status(400)
      .send({ status: "error", message: "Invalid productId." });
  }

  try {
    let updateFields = { pName, pDescription, Price };

    if (req.file) {
      const { buffer, mimetype } = req.file;
      updateFields.image = {
        data: buffer.toString("base64"),
        contentType: mimetype,
      };
    }

    const updateQuery = updateFields.image
      ? { $set: updateFields }
      : updateFields;
    await Product.updateOne({ _id: productId }, updateQuery);
    res.send({ status: "ok", data: "Product Info updated" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ status: "error", message: "Failed to update Product Info" });
  }
});
