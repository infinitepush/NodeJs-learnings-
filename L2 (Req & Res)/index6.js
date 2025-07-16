//2.7 :: Redirecting Responses :: After taking response from user we can redirect him to homepage or anywhere

const http = require('http');
const fs = require('fs');     

const server = http.createServer((req, res) => {

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>HEY EVErBODY</h1>');
    res.write('<form action ="/upload-details" method ="POST">');
    res.write('<h1>Welcome to Home page</h1>');
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
  } else if(req.method === "POST" && req.url.startsWith("/upload-details")) {
      //this method === POST to check if someone redirected without submitting the form
    console.log("POST /upload-details triggered");
    fs.writeFileSync('user.txt', 'Piyush Tiwari');
    res.statusCode = 302;
    res.setHeader('Location','/'); //we directed the user to homepage after taking response from him
    return res.end();
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