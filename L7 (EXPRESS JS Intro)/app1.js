const http = require('http'); //core module
const requestHandler = require('./User1.js'); //local module
const server = http.createServer(requestHandler); //yeh mera req Handler hai isko aap 3001 pe le jaake server banao
const port = 3001;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
}); 
