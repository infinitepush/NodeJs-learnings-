// this will handle  user router
const express = require('express');
const userRouter = express.Router();

userRouter.get("/",(req, res, next)=> {
  res.send(`<h1> Welcome to the airbnb!</h1> 
    <a href = "/add-home"> Add Home</a> 
  `);
});

module.exports = userRouter;