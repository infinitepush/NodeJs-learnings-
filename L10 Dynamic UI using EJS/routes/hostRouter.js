const path = require('path'); 

const express = require ('express');
const hostRouter = express.Router(); 

const rootDir = require("../utils/pathUtils") 


hostRouter.get("/add-home",(req, res, next)=> {
  res.sendFile(path.join(rootDir, "views", "addhome.html")); 
});
// we will add a variable which will use to store array of houseNames 

const registeredHomes = [];

hostRouter.post("/add-home",(req, res, next)=> {
 console.log('Home registration succesful for',req.body.houseName);
 registeredHomes.push ({houseName: req.body.houseName});
  res.sendFile(path.join(rootDir, "views", "homeAdded.html")); 
});


//and to show the array of houses we can directly use exports.hostRouter = router or exports.homes = homes
// these kind of exports allow multiple values to export not just one thing, here for example our export is array of houseNames. 

/*
  Using module.exports = something
This is the most direct way to export a single value (an object, function, class, router, etc.):

Using exports.something = something
This adds a named export to the module.exports object. 
*/

exports.hostRouter= hostRouter;
exports.registeredHomes = registeredHomes; 
