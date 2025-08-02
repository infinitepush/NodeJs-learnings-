const path = require('path');
//this will handle host router
const express = require ('express');
const hostRouter = express.Router();

//all the post methods are accumulated here
hostRouter.get("/add-home",(req, res, next)=> {
  res.sendFile(path.join(__dirname, "../", "views", "addhome.html")); 
});

hostRouter.post("/add-home",(req, res, next)=> {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "../", "views", "homeAdded.html")); 
});

module.exports = hostRouter;