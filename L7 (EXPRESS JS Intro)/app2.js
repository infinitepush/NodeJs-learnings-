//  Handling Routes
const express = require('express'); //External Module

const app = express();

const requestHandler = require('./User1.js'); //local module

app.use("/",(req, res, next) => { //first middleware
  // added path(default)(/)
  console.log("Came in first middleware",req.url, req.method);
  console.log("Learning Express.js"); 
  next(); 
});

app.use("/upload-details",(req, res, next) => { //Second middlware
  // you can use app.get or app.post as per your user will as using use is generally not advisable
  // coz that default path (/) is same in every link 
  console.log("Came in Second middleware",req.url, req.method);
  res.send("<p>Welcome to my website </p>");
});

const port = 3002;
app.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});  
