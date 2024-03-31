const express=require("express");
const app=express();
require("./db/conn");
const Student=require("./models/student");

const port=process.env.PORT || 3000

app.use(express.json());

//create a new student
app.post("/student",(req,res)=>{
    console.log(req.body);
    const user=new Student(req.body);
    user.save().then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(400).send(err);
    });
  
})
app.listen(port,()=>{
    console.log(`i'm listing on this port ${port}`)
})