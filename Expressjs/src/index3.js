const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.write("<h1>this is the home page</h1>");
    res.write("<h1>this is the home page</h1>");
    res.write("<h1>this is the home page</h1>");


    res.send()

})
app.get("/about",(req,res)=>{
    // res.send({
    //     id:123,
    //     name:"princi"
    // })
    res.json([
        {id:23,
        name:"princi"},
        {id:23,
            name:"princi"
        }
        ,
        {id:23,
            name:"princi"
        },
        {id:23,
            name:"princi"
        }
        
    ]);
    
})
app.listen(5000,()=>{
    console.log("listen")
})