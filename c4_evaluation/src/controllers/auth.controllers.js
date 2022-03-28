const User = require("../models/user.models")

const jwt = require("jsonwebtoken")

require('dotenv').config()

const generateToken = (user) =>{
    return jwt.sign({user}, process.env.SECRET_KEY)
}

const register = async (req,res) =>{
    try {
        let user = await User.findOne({email:req.body.email})

        if(user){
            return res.status(400).send({message:"Email already Exist"})

        }

        user = await User.create(req.body);

        const token = generateToken(user)
        return res.status(200).send({user, token});
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

const login = async (req,res) =>{
    try {
        let user = await User.findOne({email:req.body.email})

        if(!user){
            return res.status(400).send({message:"wrong email or password"})

        }
        const match = user.checkPassword(req.body.password)

        if(!match){
            return res.status(400).send({message:"wrong password or email"})
        }

        const token = generateToken(user)
        return res.status(200).send({user,token})

      
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}

module.exports = {register,login}