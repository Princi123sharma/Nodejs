const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

// const loginpath=path.join(__dirname,"/template/views")
// consoleso

// app.set("views",loginpath);

const partialpath = path.join(__dirname, "./template/partials");


app.set("view engine", "hbs");
app.get("/", (req, res) => {
  res.render("home");
});
hbs.registerPartials(partialpath);

app.get("/login", (req, res) => {
  res.render("contact");
});
app.get("/about", (req, res) => {
  res.send("this is the about page");
});

app.get("/login/*",(req,res)=>{
  res.render('unfoundpg',{
   msg:"oops this page can'nt exist in our login section!"
  })
})



app.get("*",(req,res)=>{
   res.render('unfoundpg',{
    msg:"oops this page can'nt exist in our website!"
   })
})
app.listen(8000, () => {
  console.log("8000 port is listing now");
});
