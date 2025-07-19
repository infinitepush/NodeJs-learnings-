const http = require('http');
const testingSyntax = require('./syntax1');
const server = http.createServer((req, res)=> {
  console.log(req.url, req.method);
  testingSyntax();
});
const port = 3001;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
}); 
