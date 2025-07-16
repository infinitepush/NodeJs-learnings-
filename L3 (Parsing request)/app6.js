const http = require('http');
const finreqHandler = require('./index6');
const server = http.createServer(finreqHandler);
 //yeh jo ham log function pass kar rhe the create server ko yeh ham log alag se nial diye aur yaha par ham log direct woh function pass kar diye iss varaible ko 
// abb ham log agar server app6.js se chalayenge toh bhi same hi output aayega
const port = 3002;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
}); 
// here we created our own module named as finreqHandler and also used it in app6.js the purpose was to know how to create user defined modules and use it.