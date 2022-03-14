const mongoose  = require("mongoose");

const fixedSchema = new mongoose.Schema(

    {
        account_Number:{type:Number,required:true,unique:true},
        balance :{type:Number,required:true},
        interest_Rate :{type:Number,required:true},
        startDate :{type:Date,required:true},
        maturityDate :{type:Date,required:true},
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

const fixedAccount = mongoose.model("fixed",fixedSchema)

module.exports = fixedAccount