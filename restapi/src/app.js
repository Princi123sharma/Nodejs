const express=require("express");
const app=express();
require("./db/conn");
const Student=require("./models/student");
const studentrout=require("../src/routers/student");
const port=process.env.PORT || 3000
app.use(studentrout);
app.use(express.json());






app.listen(port,()=>{
    console.log(`i'm listing on this port ${port}`)
})