const mongoose = require("mongoose");


const todoschema = new mongoose.Schema({
    title:{type:String, required:true},
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      
    }
},{
    timestamps:true,
    versionKey:true
})

const Todo = mongoose.model("todo",todoschema)

module.exports = Todo;