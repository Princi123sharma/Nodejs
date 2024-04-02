const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/registrationdata",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection successfully:")
}).catch((e)=>{
    console.log(e);
})