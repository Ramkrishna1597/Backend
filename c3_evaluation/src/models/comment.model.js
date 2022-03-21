
const mongoose  = require("mongoose");
const validator = require('validator');

const CommentSchema = new mongoose.Schema(

    {
        likes:{type:Number, required:true},
        coverImage :{type:String,required:true},
        content :{type:String,required:true},
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        bookId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Book",
            required:true,
        }
       
    },
    {
        versionKey:false,
        timestamps:true,
    }
)

const Comment = mongoose.model("User", CommentSchema)

module.exports = Comment