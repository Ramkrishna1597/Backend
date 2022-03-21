const express = require("express")

const router = express.Router();

const User = require("../models/User.model");

router.post( "/",
  validator({
      first_name:["required"],
      last_name:["required"],
      age:["required",AbstractRange[1-150]],
      email:["required","email"],
      profileImages:["required","exactLenght:1:digits"]
  }),
  async (req,res) => {
      const errorss ={};
      Object.keys(req.errors)?.map((err)=>{
          if(req.errors[err].length > 0 ) errors[err] = req.errors[err];
      })
      if(Object.keys(errors).length>0){
          res.status(400).json({data:errors});
      }else{
          res.status(200).json({data:"Success"})
      }
  }
  )

  module.exports =router