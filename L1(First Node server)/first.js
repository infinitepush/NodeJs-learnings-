//creating first node server
// first we are creating a request and respones module for that we will use the http module
const http = require('http'); //we are accessing the core moduels of http by storing it in the http variable

/* function requestListener(req, res){
  console.log(req);
  
}
http.createServer(requestListener); */ //this is old way of writing the functions
const server = http.createServer((req,res) => {
  console.log(req);
});
// so this is how we created our basic server 
//server.listen(3000); //3000 is the port
//since we are not knowing that our server is running or not inside the terminal so we do a console log statement 
const port = 3002;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});
//whenever we perform a change in the server we must first end it(ctrl+c) then start it (Node first.js)

//so this far we created a basic request-response server using http modules
//learnt about dns working, what are protocols, node core modules, require keyword 

