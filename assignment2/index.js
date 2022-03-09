

const express = require("express");

const app = express();

app.get("/users", function(req, res){

    res.send("Hello");
})

app.get("/books", function(req, res){

    res.send([{Book_Name: "Making of New India",
Author:"Dr.Bibek Debroy"},
{Book_Name: "My Journey",
Author:"Dr. A.P.J. Abdul Kalam"},
{Book_Name: "Whispers of Time",
Author:"Dr. Krishna Saksena"},
{Book_Name: "Unfinished",
Author:"Priyanka Chopra Jonas"},

]);
})

app.listen(4000, () => {

    console.log("Listening on port 4000");
});