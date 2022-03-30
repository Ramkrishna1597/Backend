const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb://Ramkrishna:ram123@cluster0-shard-00-00.cmpra.mongodb.net:27017,cluster0-shard-00-01.cmpra.mongodb.net:27017,cluster0-shard-00-02.cmpra.mongodb.net:27017/redis?ssl=true&replicaSet=atlas-bhd98e-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
};
