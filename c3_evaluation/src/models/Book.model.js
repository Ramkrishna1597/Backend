
const mongoose  = require("mongoose");
const validator = require('validator');

const bookSchema = new mongoose.Schema(

    {
        likes:{type:Number, required:true},
        coverImage :{type:String,required:true},
        content :{type:String,required:true},
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        }
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

const Book = mongoose.model("User", bookSchema)

module.exports = Book