const mongoose=require("mongoose");
const validator=require("validator");
const schema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
       type:String,
       required:true,
    },
       Email:{
            type:String,
            required:true,
            unique:true,
            validate(value){
                validator.isEmpty("Invalid email")
            }
       },
       password:{
        type:String,
        required:true,
        

       },
       Confirmpassword:{
        type:String,
        required:true,
       }
    })

const Register=new mongoose.model("Register",schema);

module.exports=Register;