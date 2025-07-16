//3.5: Buffering chunks(Reading chunks): collect the chunk in a buffer and then convert it into meaningful data
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
  } else if (req.url.toLowerCase() === "/upload-details" && req.method === 'POST') {

    const body = []; //created a array for storing(buffer) of chunks
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk); // we pushed our chunk inside the array
    });
    //now how to know that buffering (storing) has been done ?
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });
  }
  // we learn here how to use event over a chunk and get usable data from it

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