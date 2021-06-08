const mongoose= require("mongoose");
const validator=require("validator");


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email id")
            }
        }
    },
    
    subject:{
        type:String,
        required:true,

    },
    message:{
        type:String,
        required:true,
    },
    date:{
        type: Date,
        default :Date.now
    }

})
//we need a collection
// const User =mongoose.modle("User",userSchema);
module.exports = mongoose.model("User",userSchema);