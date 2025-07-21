//5.6 Installing nodemon: It basically helps in auto-updation of our codes in the server without actually killing & restarting the server each and every time we modify the code. 
//  npm install nodemon --save-dev 
// we used save dev coz to use it only for dev dependencies 
// go and check app.js after the command run

//5.7 Using nodemon: now to use this nodemon command we must first declare it globally using -g after: npm install nodemon --save-dev -g //this will declare the nodemon globally means it all across my device
// now put nodemon filename.js to use this command
// now if you do any changes in the file then the nodemon will automatically kill the server and fix the updates and then again automatically start the server