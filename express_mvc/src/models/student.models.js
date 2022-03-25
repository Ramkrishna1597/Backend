
const mongoose = require("mongoose");

// POST SCHEMA
// Step 1 :- creating the schema
const studentSchema = new mongoose.Schema(
  {
    rollid: { type: String, required: true },
    currentBatch: { type: String, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  }
);

// Step 2 :- creating the model
const Student  = mongoose.model("student", studentSchema); // post => posts

module.exports = Student