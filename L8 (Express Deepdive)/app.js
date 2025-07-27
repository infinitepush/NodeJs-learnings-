//External Module 
const express = require('express');  //importing the express module
// while doin the route handling we are importing our local module
const userRouter = require("./routes/userRouter");
const hostRouter = require('./routes/hostRouter');
// we just imported two different routers 

const app = express(); //calling the express function

// Either do body-parse method and show the details or use url-encoded directly in the app
app.use(express.urlencoded()); // this will show the details entered

app.use(userRouter); //this module contains user routings
app.use(hostRouter); //this module contains host routings

app.use((req, res, next) => {
  res.status  (404).send("<h1> 404 Your page is not found in the airbnb!</h1>");
});

const PORT = 3000;
app.listen(PORT, () =>{
  console.log(`Server running on address https://localhost:${PORT}`);
});
  // It's a good idea to seperate the user pages and the admin pages 
  
