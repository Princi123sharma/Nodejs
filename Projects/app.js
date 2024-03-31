const express=require("express");
const app=express();
const port=process.env.PORT || 8000;



app.set("view engine","hbs")
app.get("/home",(req,res)=>[
    res.render("index")
])
app.listen(port,()=>{
    console.log("connect to the server");
})