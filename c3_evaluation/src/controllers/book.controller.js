const express = require("express")

const router = express.Router();

const book = require("../models/Book.model");

router.post( "/",
  validator({
      likes:["required"],
     coverImage:["required"],
      content:["required"],
  
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