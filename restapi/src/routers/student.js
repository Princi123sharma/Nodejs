const express=require("express");
const router=new express.Router();
const Student=require("../models/student");

router.post("/student",(req,res)=>{
    console.log(req.body);
    const user=new Student(req.body);
    user.save().then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(400).send(err);
    });
  
})

router.post("/student",async(req,res)=>{
    console.log(req.body);
  
    try{
        const user=new Student(req.body);
         const createuser=await user.save();
         res.status(201).send(createuser);

    }
    catch(e){
        res.status(400).send(e);
    }
})

//get the data

router.get("/student",async (req,res)=>{
     try{
       const getstudentdata= await Student.find();
       res.status(201).send(getstudentdata);
     }
     catch(e){
       res.status(400).send(e);
     }
})


//individual student data get

router.get("/student/:id",async (req,res)=>{
    try{
          const _id=req.params.id;
        const studentdata= await Student.findById({_id});
        console.log(studentdata);
        res.status(201).send(studentdata);
    }
    catch(e){
        res.status(400).send(e);
    }
})

router.patch("/student/:name",async (req,res)=>{
   try{
        const name=req.params.name;
        const user=req.body;
        const updatedata=await Student.findOneAndUpdate({name},user,{new:true});
        res.send(updatedata);
   }
   catch(e){
    res.status(400).send(e);
   }
})

//delete student record

router.delete("/student/:id",async (req,res)=>{
    try{

        const _id=req.params.id;
       const deletestud= await Student.deleteOne({_id});
       res.send(deletestud);



    }
    catch(e){
        res.status(400).send(e);
    }
})

module.exports=router;