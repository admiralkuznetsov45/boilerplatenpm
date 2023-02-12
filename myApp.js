let express = require('express');
let app = express();

//1. Hello World
// console.log("Hello World")

//2. Response Express Server 
// app.get("/", (req, res) => {
//     res.send("Hello Express");
//   });

app.get("/", (req, res) => {
    res.send(__dirname + "/views/index.html");
  });


 module.exports = app;
