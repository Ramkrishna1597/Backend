

const mongoose = require("mongoose");

// USER SCHEMA
// Step 1 :- creating the schema
const evaluationSchema = new mongoose.Schema(
  {
    date_of_evaluation: { type: Date, required: true },
    instructor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
    batch_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "batch",
        required: true,
      }
    
  },
  {
    versionKey: false,
    // timestamps: true, // createdAt, updatedAt
  }
);

// Step 2 : creating the model
const Evaluation = mongoose.model("evaluation", evaluationSchema); // user => users

module.exports = Evaluation;
