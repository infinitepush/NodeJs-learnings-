// 2.5: Routing Requests:: Basically we will learn how to use url here
// i..e, alag alag url ke base par alag alag content dikhaya ja skta hai
// ab ham log reponse denge based on url
const http = require('http'); 

const server = http.createServer((req,res) => {
  console.log(req.url, req.method, req.headers); ///logs info for debugging

  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html'); 
  res.write('<html>'); 
  res.write('<head><title>My first Page</title></head>');
  res.write('<body><h1>This is default URL content</h1></body>');
  res.write('</html>')
  return res.end(); 
  }else if(req.url === '/products'){
    res.setHeader('Content-Type', 'text/html'); 
  res.write('<html>'); 
  res.write('<head><title>My first Page</title></head>');
  res.write('<body><h1>This shows when we use /products in the url</h1></body>');
  res.write('</html>')
  return res.end(); //this return statement is neccesary or you'll get error cannot modify headers after they are sent to the client
  }else{res.setHeader('Content-Type', 'text/html'); 
  res.write('<html>'); 
  res.write('<head><title>My first Page</title></head>');
  res.write('<body><h1>Checkout our products</h1></body>');
  res.write('</html>')
  return res.end(); 
  }
});

const port = 3002;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
}); 
// So this is how we do request routing based on url & can send multiple responses

