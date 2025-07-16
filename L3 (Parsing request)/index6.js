// 2.7: Using Modules: we can create our own modules and can call them anywhere like we will create a file named as app6.js and shift all the server creation part there and then we will create a variable in which we will store all the req and res data interacted from the server and then just console.log that variable which stores the main function(i..e req & res).

const fs = require('fs');

const reqHandler = ((req, res) => {  // yeh jo ham log function pass kar rhe the create server ko yeh ham log alag se nikal diye 
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first Page</title></head>');
    res.write('<body><h1>HEY EVErBODY</h1>');
    res.write('<form action ="/upload-details" method ="POST">');
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
    res.write('</html>');
    return res.end();

  } else if (req.url.toLowerCase() === "/upload-details" && req.method === 'POST') {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);
      const jsonObject = Object.fromEntries(params);
      console.log(jsonObject);
      fs.writeFileSync('user.txt', JSON.stringify(jsonObject));

      res.setHeader('Content-Type', 'text/html');
      res.write('<html>');
      res.write('<head><title>This is else case</title></head>');
      res.write("<body><h1> thank you for visiting, your form has been submitted</h1></body>");
      res.write('</html>');
      res.end();
    });

  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>404 Not Found</title></head>');
    res.write("<body><h1>Page not found</h1></body>");
    res.write('</html>');
    res.end();
  }
});
module.exports = reqHandler;