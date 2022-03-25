

const mongoose = require("mongoose");

// POST SCHEMA
// Step 1 :- creating the schema
const batchSchema = new mongoose.Schema(
  {
    
    batchName: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true, // createdAt, updatedAt
  }
);

// Step 2 :- creating the model
const Batch  = mongoose.model("batch", batchSchema); // post => posts

module.exports = Batch