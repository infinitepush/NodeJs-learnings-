//this will handle host router
const express = require ('express');
const hostRouter = express.Router();

//all the post methods are accumulated here
hostRouter.get("/add-home",(req, res, next)=> {
  res.send(`<h1> Welcome to the home section of airbnb </h1>
    <h3> Register your home here</h3>
    <form action = "/add-home" method = "POST">
    <input type = "text" name = "houseName"
    placeholder= "Enter the name of your house" />
    <input type = "submit" /></form>
    <a href = "/"> Homepage</a>  
  `)
});

hostRouter.post("/add-home",(req, res, next)=> {
  console.log(req.body);
  res.send(`<h1> Your Home was succesfully added.</h1>
    <a href = "/"> Homepage</a>  
  `);
});

module.exports = hostRouter;