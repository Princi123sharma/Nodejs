

const path=require("path");
const express=require("express");
const app=express();








app.set("view engine","ejs");


app.set('views',path.join(__dirname,'/template'));

app.get("/",(req,res)=>{

    const stud={
        name:"princi",
        rollno:123,
        designation:"developer",
        hobbies:['developement','dancing','skating','exploringnewplaces']
    }
    
    res.render("index2",{stud});
})
app.get("/about",(req,res)=>{
    res.render('about');
})

app.listen(8000,()=>{
    console.log("listning");
})