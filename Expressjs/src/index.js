const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require('body-parser')

const static = path.join(__dirname, "../public");

app.set("view engine", "ejs"); 
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(cors())


app.get("/",(req,res)=>{
  // const stud={
  //   name:"princi",
  //   rollno:123,
  //   designation:"learner"
  // }
  app.render("index1");
})


// let login  = false;
// const auth = function(req, res, next){
//   if(login){
//     next()
//   }else{
//     res.redirect('/login')
//     next()
//   }
// }
// app.use(auth)


// app.use(express.static(static));



// app.get('/login', (req, res) => {
//   login = true;
//   res.send("Login Page");
// })

// app.post("/add", (req, res) => {
//   console.log(req.body)
//   let name = req.body.name
//   res.send("Data: ", name)
// })

app.get("/",(req,res)=>{
  res.send("this is the home page");
});


app.get("/logout", (req, res) => {
  // login = false;
  res.send("this is the about  page");
});

app.get("/test", (req, res) => {
  res.send("Testing Route from express app!");
});

app.listen(8000, () => {
  console.log("listeing");
});

console.log("hello primcy");


/*
Middleware: 
            pdf file/ Web page -> 
*/

/* 
 php -> get post
Request Method
Get Post patch put delete

/users get
/users post
/users patch
/users put
/users delete

{
  id: 3,
  method: "delete/ update"
}

app.post(()=>{
  if (method == 'delete'){

  }else if(method == 'update'){
    
  }
})

*/