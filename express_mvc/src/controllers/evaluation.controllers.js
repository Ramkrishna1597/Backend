

const express = require("express");

const Evaluation = require("../models/evaluation.models");

const crudController = require("./crud.controllers");

const router = express.Router()
// "" or / not found
// original => get /users
// /users => get and /
// USERS CRUD
router.get("", async (req, res) => {
  try {
    const evaluation = await Evaluation.find().populate({ path: "instructor",select:["firstName"] }).populate({ path: "batch_id",select:["batchName"] })
    .lean()
    .exec();

    return res.status(200).send({ evaluation: evaluation }); // []
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.post("", crudController.post(Evaluation));

// body => req.body
// url => req.params
// query string => req.query

router.get("/:id", async (req, res) => {
  try {
    const evaluation= await evaluation.findById(req.params.id).populate({ path: "instructor",select:["firstName"] }).populate({ path: "batch_id",select:["batchName"] })
    .lean()
    .exec();
    // db.users.findOne({_id: Object('622893471b0065f917d24a38')})

    return res.status(200).send(Evaluation);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const evaluation = await Evaluation.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).populate({ path: "instructor",select:["firstName"] }).populate({ path: "batch_id",select:["batchName"] })
    .lean()
    .exec();
    
    // db.users.update({_id: Object('622893471b0065f917d24a38')}, {$set: {req.body}})

    return res.status(200).send(evaluation);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.delete("/:id", crudController.deleteOne(Evaluation));

module.exports = router