const express = require("express")

const connect = require("./configs/db")

const app = express();

app.use(express.json());

const start = async () => {

    await connect();

    app.listen(1234,() =>{
        console.log("listening on port 1234")
    })
}

module.exports  = start;