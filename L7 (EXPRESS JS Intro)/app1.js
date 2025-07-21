 // const http = require('http'); //core module
 // express use krne ke baad we don't need core modules

const express = require('express'); //External Module
//jaise core modules ko require kiya waise hi external express modules ko bhi kar liya 

const app = express();

const requestHandler = require('./User1.js'); //local module

app.use((req, res, next) => { //first middleware
  console.log("Came in first middleware",req.url, req.method);
  next(); // yeh next abb response ko next wale middleware ke paas bhej dega
});
// jisko pehle register kiya woh pehla middleware hojaega
app.use((req, res, next) => { //Second middlware
  console.log("Came in Second middleware",req.url, req.method);
  res.send("<p>Welcome to my website </p>");
});

// const server = http.createServer(app); we don't need this also after installing express 
//express module ko install krne ke baad req Handler ki jagah ham 'app'(express) par server create kr skte hai 
// ek tarah se 'app' bhi req Handler hi hai jo req,res le rha hota hai


/*
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});
*/  //we can directly listen to server through express
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});  
