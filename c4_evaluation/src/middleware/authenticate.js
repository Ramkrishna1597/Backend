
require("dotenv").config();
const jwt = require("jsonwebtoken")

const verifytoken = (token) =>{
    return new Promise((resolve,reject) =>{
        jwt.verify(token, process.env.SECRET_KEY, (err,decoded)=>{
            if(err) return reject(err)

            return resolve(decoded)
        })
    })
}

const authenticate = async(req,res,next) =>{

    if(!req.headers.authorization)
    return res.status(400).send({message:"Authentication token not found"})

    if(!req.headers.authorization.startsWith("Bearer"))
    return res.status(400).send({message:"Authorization token not found"})

    const token = req.headers.authorization.trim().split(" ")[1]

    let decoded;
    try {
        decoded = await verifytoken(token)
        
    } catch (error) {
        console.log(error)
        return res.status(400).send({message:"Authorization token not found"})
    }

    console.log(decoded)

    req.userID = decoded.user._id;

    return next();
}

module.exports = authenticate;