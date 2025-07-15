//2.3: Understanding request object: Headers = they are basically a short info about the data requested or responded
//instead of requesting all stuffs we can request selected also, like rel, method and headers. For ex:
const http = require('http'); 

const server = http.createServer((req,res) => {
  console.log(req.url, req.method, req.headers); //now this will req only three parameters and in return also get these 3 only..
});

const port = 3002;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});
