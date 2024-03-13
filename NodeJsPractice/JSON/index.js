
const fs=require('fs');


const obj={
    name:"princi",
    age:20,
    address:"dharmveer petrol pump gwalior"
}
const jasondata=JSON.stringify(obj);

fs.writeFile('read.txt',jasondata,(err)=>{
    console.log("file created");
})
const data=fs.readFile('read.txt','utf-8',(err,data)=>{
    console.log(data);
    const againobj=JSON.parse(data);
console.log(againobj);
})

