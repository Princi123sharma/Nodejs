const fs=require("fs");
fs.writeFile("read.txt","today is the best day",(error)=>{
   console.log("file is created");
});