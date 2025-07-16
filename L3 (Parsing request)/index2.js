// 3.4: Reading Chunks:: "Jab bhi koi naya chunk aajaye toh mujhe batadena"
const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>HEY EVErBODY</h1>');
    res.write('<form action ="/upload-details" method ="POST"');
    res.write('<h1>Welcome to Home page</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your name"><br><br>');
    // this 'name' right here will act as key and the user input will be it's value.. this is backend
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');

    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>')
    return res.end();
  }else if(req.url.toLowerCase()=== "/upload-details" && req.method == 'POST'){

    // below is the way of reading chunks
    req.on('data', chunk => {
      console.log(chunk);
    });
  }

  {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>This is else case</title></head>');
    res.write("<body><h1> thank you for visiting, your form has been submitted</h1></body>");
    res.write('</html>');
    res.end();
  }
});
const port = 3002;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
}); 
/* Server running on address http://localhost:3002
<Buffer 75 73 65 72 6e 61 6d 65 3d 70 69 79 75 73 68 26 67 65 6e 64 65 72 3d 6d 61 6c 65>
<Buffer 75 73 65 72 6e 61 6d 65 3d 70 69 79 75 73 68 26 67 65 6e 64 65 72 3d 6d 61 6c 65> */
// this will be the output but this is not readble format right ? 
// so our next topic is reading chunk