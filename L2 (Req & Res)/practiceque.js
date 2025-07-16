// Create a place that shows a navigation bar of Myntra with the following links:
// A Home B Men C Women D kids E Cart 
// Clicking on each link page should navigate to that page and a welcome text is shown there
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body><h1>Welcome to the Homepage</h1>');
    res.write('<nav>');
    res.write('<a href = "/">Home</a><br>');
    res.write('<a href = "/Men">Men</a><br>');
    res.write('<a href = "/Women">Women</a><br>');
    res.write('<a href = "/Kids">Kids</a><br>');
    res.write('<a href = "/Cart">Cart</a><br>');
    res.write('</nav>');
    res.write('</body>');
    res.write('</html>')
    return res.end();
  }
  else if (req.url === '/Men') {
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>MenPage</title></head>');
    res.write('<body><h1>Welcome to the Men page</h1>');
    res.write('<a href = "/">Home</a><br>');
    res.write('</body>');
    res.write('</html>')
    return res.end();
  }
  else if (req.url === '/Women') {
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>WomenPage</title></head>');
    res.write('<body><h1>Welcome to the Women page</h1>');
    res.write('<a href = "/">Home</a><br>');
    res.write('</body>');
    res.write('</html>')
    return res.end();
  }
  else if (req.url === '/Kids') {
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>KidsPage</title></head>');
    res.write('<body><h1>Welcome to the Kid page</h1>');
    res.write('<a href = "/">Home</a><br>');
    res.write('</body>');
    res.write('</html>')
    return res.end();
  }
  else if (req.url === '/Cart') {
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>CartPage</title></head>');
    res.write('<body><h1>Welcome to the Cart page</h1>');
    res.write('<a href = "/">Home</a><br>');
    res.write('</body>');
    res.write('</html>')
    return res.end();
  }
  {
    res.writeHead(404);
    res.write('<h1> Page not found </h1>');
    res.end();
  }
});
const port = 3003;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});
