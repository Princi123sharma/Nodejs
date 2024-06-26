const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require("hbs");
require("./src/db/conn");
const register = require("./src/model/model");

const bcrypt = require("bcryptjs");

const templatepath = path.join(__dirname, "./templates/views");
console.log(__dirname);
const partial_path = path.join(__dirname, "./templates/partials");
app.set("views", templatepath);
app.set("view engine", "hbs");
hbs.registerPartials(partial_path);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/home", (req, res) => {
  res.render("index");
});
app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  try {
    const password = req.body.password;
    const cpassword = req.body.confirmpass;
    if (password === cpassword) {
      const data = new register({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        Email: req.body.email,
        password: req.body.password,
      });

      const datastore = await data.save();
      res.status(201).send(datastore);
    } else {
      res.send("password does not match");
    }
  } catch (e) {
    res.status(400).send(e);
  }
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const enterpass=req.body.password;
    const useremail = await register.findOne({ Email: email });
    const match=await bcrypt.compare(enterpass,useremail.password);

     
    if (match) {
      res.render("index");
    } else {
      res.send("invalid password:");
    }
  } catch (e) {
    res.status(400).send("invalid login details:");
  }
});

// const securepass=async (password)=>{
//     const passwordhash=await bcrypt.hash(password,10);

//     const matchpass=await bcrypt.compare(password,passwordhash);
//     console.log(matchpass);
// }

// securepass("nishu");

//authentication--To verify that, is it a valid user or not!!

// const jwt=require("jsonwebtoken");
// const generatetoken=async ()=>{
//       const createtoken=await jwt.sign({_id:"660d5cede27a3d786ffba9d2"},"mynameisprincisharma123",{
//         expiresIn:"2 minute"
//       });
//       console.log(createtoken);

//       const verifytoken= await jwt.verify(createtoken,"mynameisprincisharma123");
//       console.log(verifytoken);
// }
// generatetoken();



















app.listen(port, () => {
  console.log("connect to the server");
});
