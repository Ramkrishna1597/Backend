

const mongoose = require("mongoose");

// USER SCHEMA
// Step 1 :- creating the schema
const submissionSchema = new mongoose.Schema(
  {
    evaluation_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "evaluation",
        required: true,
      },
      student_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      marks:{type:Number,required:true}
  },
  {
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  }
);

// Step 2 : creating the model
const Submission = mongoose.model("submission", submissionSchema); // user => users

module.exports = Submission;