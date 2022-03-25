const express = require("express");

const Student = require("../models/student.models");

const crudController = require("./crud.controllers");

const router = express.Router()
// "" or / not found
// original => get /users
// /users => get and /
// USERS CRUD
router.get("", async (req, res) => {
  try {
    const student = await Student.find().populate({ path: "userId", select: ["firstName"] })
    .lean()
    .exec();

    return res.status(200).send({ student: student }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", crudController.post(Student));

// body => req.body
// url => req.params
// query string => req.query

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate({ path: "userId", select: ["firstName"] })
    .lean()
    .exec();
    // db.users.findOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(student);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate({ path: "userId", select: ["firstName"] })
    .lean()
    .exec();
    
    // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})

    return res.status(200).send(student);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", crudController.deleteOne(Student));

module.exports = router;