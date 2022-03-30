const path = require("path");

const express = require("express");

const transporter = require("../configs/mail");

const User = require("../models/user.model");

const router = express.Router();


router.get("/", async (req, res) => {
  try {
  
    const page = req.query.page || 1;
    const pagesize = req.query.pagesize || 10; 

    // if page = 1 then data should be from 1 to 30
    // if page = 2 then data should be from 31 to 60

    const skip = (page - 1) * pagesize; // 1 - 1 = 0 0 * anything  = 0
    // page = 2 then 2 - 1 = 1 and 1 * pagesize = 30

    const users = await User.find()
      .skip(skip) // 30
      .limit(pagesize) // 31 - 60
      .lean()
      .exec();

    const totalPages = Math.ceil(
      (await User.find().countDocuments()) / pagesize
    );

    return res.status(200).send({ users, totalPages });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);

    transporter.sendMail({
      from: '"Amazon admin" <admin@amazon.com>', // sender addres
      to: user.email, // list of receivers
      subject: `Welcome to ABC system ${user.first_name} ${user.last_name}`, // Subject line
      text: `Hi ${user.first_name}, Please confirm your email address`, // plain text body
      
    });

    return res.status(201).send({ message: `${user.first_name} ${user.last_name} has registered with us` });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
