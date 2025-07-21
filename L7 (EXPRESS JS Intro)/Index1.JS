//7: Express JS: 
//7.1: Defination: Express.js is a minimal and flexible web application framework for Node.js
// It provides a robust set of features for building single page, multi page, and hybrid web applications 
// Express.Js simplifies server side coding by providing a layer of fundamental web application features. 

//7.2 Need of Express Js: 
// 1) It simplifies Server Creation: Helps in quickly setting up and running a web server
// 2) Routing Management: Provides a powerful routing mechanism to Handle URLs and HTTP methods effectively.
// 3) Middleware Support: Allows the use of middleware to Handle Requests, Response, and many middle operations, making code modular and maintainable
// 4) API devlopment: Fecilitates easy and efficient creaation of RESTful API's
// 5) Community and Plugins: Has a large ecosystem with numerous plugins nd extensions, accelearting devlopment time.

//7.3: Installing Express.JS: Express is a Nodejs package so we will use similar type of commands to install Express.js :  npm install experess
//express ko include karna, server banana yaha tak hamne dekh liya

//7.4: Adding Middleware: Middle ware ka sequence/order is imp.. like for a bank operation first we will check the authorization of the user and then we will proceed to check balance
// Middle ware has (req,res,next) this next() is important as it will track the order of the middleware and also if we want to call that particular middleware then also with the help of this middleware we can directly call that 
//so to use the middle ware we use, 'use' function

//7.5: Sending Response: we use res.send("") to send responses
//7.6: Express Deepdive: Express is a open source. You can go to Express github to read about it's working.
// Actually everything is happening as we were doing in Node.js, but the thing is that Express.js doing many things on it's own so that we don't do it manually hence our works becomes easier just install the express module  

//7.7: Handling Routes: we can create multiple middleware and for that the syntax are: 
// app.use([path,] callback [, callback...])
// Mounts the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches the path 
// go check app2.js for reading the 7.7 implementation
// We can also give app.methodname(like get/post) instead of use keyword
// using use method is not suitable much coz it is a wildcard it matches will all other links but using post and get helps in specific user based differentiation