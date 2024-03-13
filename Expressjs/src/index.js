
const path=require("path");
const express=require("express")
const app=express();

const static=path.join(__dirname, "../public" );


app.use(express.static(static))

app.get("/",(req,res)=>{
    res.send("this is the home page");
})
app.get("/about",(req,res)=>{
    res.send("this is the about  page");
})
app.listen(8000,()=>{
    console.log("listeing");
})
