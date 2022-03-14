const mongoose  = require("mongoose");

const MasterSchema = new mongoose.Schema(

    {
        
        balance :{type:Number,required:true},
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

const MasterAccount = mongoose.model("master", MasterSchema)

module.exports = MasterAccount