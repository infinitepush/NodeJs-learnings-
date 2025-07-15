//2.4: Sending Response: just like we sended request, there is also response as argument too
// we will look at one of the response in the following programe
const http = require('http'); 

const server = http.createServer((req,res) => {
  console.log(req.url, req.method, req.headers); 
  res.setHeader('Content-Type', 'text/html'); //we can send response as json file or as html file anyway
  res.write('<html>'); //here is a exxample for the html file as response--
  res.write('<head><title>My first Page</title></head>');
  res.write('<body><h1> Learning about responses in node js</h1></body>');
  res.write('</html>')
  res.end(); // this signifies our response has ended 
});

const port = 3002;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
}); 
