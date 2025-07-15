// 2.1: Node lifecycle and event loop
// since js is a single threaded language it handles many requests at one-by-one, so there is enough queue formations to avoid this, event loop creates multiple thread pool. eg: event loop tells a thread loop to go get some database and report it back when it's done. And thus this how event loop works.
// 2.2: How to exit event loop: to exit event loop we can use process.exit(); for ex: 

const http = require('http'); 

const server = http.createServer((req,res) => {
  console.log(req);
  process.exit(); //stops event loop
});

const port = 3002;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});


