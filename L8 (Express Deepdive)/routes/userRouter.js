//core modules
const path = require('path'); //relative path
// this will handle  user router

const rootDir = require("../utils/pathUtils") //local module for absolute path

//external modules
const express = require('express'); 
const userRouter = express.Router();

userRouter.get("/",(req, res, next)=> {
  res.sendFile(path.join(rootDir, "views", "home.html")); //this is a path we need to give it according to our folder idea ../ is for going out of the folder 
});

module.exports = userRouter;