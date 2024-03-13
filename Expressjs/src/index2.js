const express=require("express");
const fun=express();
fun.get('/',(req,res)=>{
    res.send("this is the welcome page");

})
fun.get('/about',(req,res)=>{
    res.send("this is the about page");
    
})
fun.get('/contact',(req,res)=>{
    res.send("this is the contact page");
    
})
fun.listen(3000,()=>{
    console.log("listing")
})