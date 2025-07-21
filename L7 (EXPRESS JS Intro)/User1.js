const userRequestHandler = ((req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>HEY EVERYBODY</h1>');
    res.write('<h1>Welcome to Home page</h1>');
    
    res.write('<form action="/upload-details" method="POST">');  
    res.write('<input type="text" name="username" placeholder="Enter your name"><br><br>');
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if (req.url === "/upload-details" && req.method === 'POST') {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
      res.statusCode = 302;  // Redirect after POST
      res.setHeader('Location', '/');
      res.end();
    });
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Other Page</title></head>');
    res.write("<body><h1>Thank you for visiting, your form has been submitted</h1></body>");
    res.write('</html>');
    res.end();
  }
});
