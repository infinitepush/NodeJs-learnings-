// But hamko sirf parse nhi krna tha hamko toh file writing bhi karna tha
const http = require('http');
const fs = require('fs');
const { URLSearchParams } = require('url');
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
// yeh sara kaam toh async function hai, matlab yeh call back toh baad me aayega aur yeh jo async function hai yeh toh bass chunk buffer karta reh jayega aur hamara write file fs pehle hi execute hojaega, so to avoid this we write:
fs.writeFileSync('user.txt', JSON.stringify(jsonObject));
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