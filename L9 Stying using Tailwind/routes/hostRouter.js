const path = require('path'); // local module for  relative path
//this will handle host router
const express = require ('express');
const hostRouter = express.Router();

const rootDir = require("../utils/pathUtils") //local module for absolute path

//all the post methods are accumulated here
hostRouter.get("/add-home",(req, res, next)=> {
  res.sendFile(path.join(rootDir, "views", "addhome.html")); 
});

hostRouter.post("/add-home",(req, res, next)=> {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "homeAdded.html")); 
});

module.exports = hostRouter;