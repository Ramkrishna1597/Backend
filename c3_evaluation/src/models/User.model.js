
const mongoose  = require("mongoose");
const validator = require('validator');

const UserSchema = new mongoose.Schema(

    {
        firstName :{type:String, required:true},
        lastName :{type:String,required:true},
        age :{type:Number,required:true},
        email :{type:String,required:true,unique:true},
        profileImages:{type:String,  required:true }
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

const User = mongoose.model("User", UserSchema)

module.exports = User