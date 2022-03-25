
const mongoose = require("mongoose");

const connect = () => {
  
  //  return mongoose.connect("mongodb+srv://ramkrishna:1234@ram.sqvzl.mongodb.net/MasaiRecord?retryWrites=true&w=majority")
  //  return mongoose.connect("mongodb+srv://Ramkrishna:1234@cluster0.cmpra.mongodb.net/MasaiRecord?retryWrites=true&w=majority")
  return mongoose.connect("mongodb://127.0.0.1:27017/MasaiRecord");
};

module.exports = connect;