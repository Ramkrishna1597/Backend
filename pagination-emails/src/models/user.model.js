const mongoose = require("mongoose");

const registration = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
   
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", registration);

module.exports = User;
