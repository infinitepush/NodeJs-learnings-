
const path = require('path'); //core module



//external modules
const express = require('express'); 
const userRouter = express.Router();

//local module: 
const rootDir = require("../utils/pathUtils") 
const { registeredHomes } = require('./hostRouter');


userRouter.get("/",(req, res, next)=> {
  console.log(registeredHomes); //just console.log to check if the variable is accessible or not
  res.sendFile(path.join(rootDir, "views", "home.html")); 
});

module.exports = userRouter;