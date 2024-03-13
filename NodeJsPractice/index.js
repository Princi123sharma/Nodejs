const fs=require('fs');


//creating a new file
// fs.writeFileSync("read.txt","i'm learning node js and try to be consistent");

// fs.appendFileSync("read.txt","how are your bruhhh pls try to be consistent in all kind of situation");


// const read=fs.readFileSync("read.txt");

// const org_data=read.toString();
// console.log(org_data);

fs.renameSync("read.txt","readwrite.txt");
