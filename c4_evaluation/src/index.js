const express = require("express")

const connect = require("./configs/db")

const usercontroller = require("./controllers/user.controllers")
const todocontroller = require("./controllers/todo.controllers")

const {register,login} = require("./controllers/auth.controllers")


const app = express()

app.use(express.json())
app.use("/user",usercontroller)
app.post("/register",register)

app.post("/login",login)

app.get("/todos",todocontroller)
app.post("/todos",todocontroller)

app.use(5000,async () =>{
    
    try {
        await connect();
        console.log("listening on port 5000")
    } catch (error) {
        console.log(error.message)
    }

})