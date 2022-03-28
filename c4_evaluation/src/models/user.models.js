
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userschema = new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
},{
    timestamps:true,
    versionKey:true
})

userschema.pre("save",function(next){
    const pass = bcrypt.hashSync(this.password);
    return next();
})

userschema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password,this.password)
}

const User = mongoose.model("user",userschema)

module.exports = User;