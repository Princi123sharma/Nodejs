const express=require("express");
const app=express();

//middleware-it applies before the routes;



app.get("/",(req,res)=>{
    res.send("this is the home page");
})


app.get("/contact",(req,res)=>{
    res.send("this is the contact page")
});

app.get("/login",(req,res)=>{
    res.send("this is the login page");
})


app.listen(3000,()=>{
    console.log("server is listing");
})

