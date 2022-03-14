const express = require("express");

const usersController = require("./controllers/user.controllers");
const BranchController = require("./controllers/branch.controllers");
const accountController = require("./controllers/account.controllers");

const app = express();

app.use(express.json());

app.use("/users", usersController); // /users/abcd/fkhsdkfh/fkhsdk
app.use("/posts", BranchController);
app.use("/comments", accountController);

module.exports = app;