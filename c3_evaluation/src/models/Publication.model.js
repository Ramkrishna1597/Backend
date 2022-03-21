
const mongoose  = require("mongoose");
const validator = require('validator');

const publicationSchema = new mongoose.Schema(

    {
        name:{type:String, required:true},
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

const Publication = mongoose.model("User", publicationSchema)

module.exports = Publication