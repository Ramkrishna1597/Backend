const mongoose  = require("mongoose");

const SavingSchema = new mongoose.Schema(

    {
        account_Number:{type:Number,required:true,unique:true},
        balance :{type:Number,required:true},
        interest_Rate :{type:Number,required:true},
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

const SavingAccount = mongoose.model("saving",SavingSchema)

module.exports = SavingAccount