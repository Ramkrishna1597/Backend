
const express = require("express");

const app = express();

// app.use(allBooks); // logger() logger


app.get("/books", allBooks,  (req, res) => {
    
  return res.send([{Book_Name: "Game of Thrones",
  Author:"George R. R. Martin"},
  {Book_Name: "My Journey",
  Author:"Dr. A.P.J. Abdul Kalam"},
  {Book_Name: "Harry Potter",
  Author:"J. K. Rowling"},
  {Book_Name: "Unfinished",
  Author:"Priyanka Chopra Jonas"},
  
  ]);
});

app.use(singleBook)
app.get("/book",singleBook, (req, res) => {
    return res.send({ route: "/book", role: req.params.name });
  });

  app.get("/book/Harry_Potter", singleBook,  (req, res) => {
    return res.send({ route: "/book", name: req.params.name });
  });
  
  

  function singleBook(req, res, next) {
    if (req.path === "/book/Game_of_thrones") {
        req.name = "Game of thrones"
      req.params.name = req.name;
    } else if (req.path === "/book/Harry_Potter") {
        req.name = "Harry Potter"
        req.params.name = req.name;
    } else {
      req.role = "somebody";
    }
    console.log("single Book");
    next();
  }



function allBooks(req, res, next) {
  if (req.path === "/books") {
    console.log("fetching all books");
    next();
    
  } 
 else {
     console.log("something went wrong")
 }
}

app.listen(5000, () => {
  console.log("listening on port 5000");
});