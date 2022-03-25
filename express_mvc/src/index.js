
const express = require("express");

const usersController = require("./controllers/user.controllers");
const studentController = require("./controllers/student.controllers");
const batchController = require("./controllers/batch.controllers");
const evaluationController = require("./controllers/evaluation.controllers");
const submissionController = require("./controllers/submission.controllers");


const app = express();

app.use(express.json());

app.use("/users", usersController); // /users/abcd/fkhsdkfh/fkhsdk
app.use("/student", studentController)
app.use("/batch", batchController)
app.use("/submission", submissionController)
app.use("/evaluation", evaluationController)

module.exports = app;