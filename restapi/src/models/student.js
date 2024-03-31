const mongoose=require("mongoose");
const validator=require("validator");

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
    },
    
    Email:{
        type:String,
        required:true,
        unique:[true,"Email id is not valid"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
       
        required:true,
    }

})

//create a new collection

const Student=new mongoose.model("User",schema);
module.exports=Student;

