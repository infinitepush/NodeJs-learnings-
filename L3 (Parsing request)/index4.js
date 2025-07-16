//3.6: Parsing Requests: url encode hokar aa rha usko decode krna hai use krne se pehle
// toh hamare parameter ko URLSearchParams se as aruement pass krenge
// aur phir usko key value pair me tod denge
const http = require('http');
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
      //now parsing the requests:
      const params = new URLSearchParams(parsedBody); //tum apne aap isko decode karo
      
     /* const jsonObject = {};
      for(const [key,value] of params.entries()){ //tum ek ek karke hamko key vavlue dena start kro
        jsonObject[key] = value; //uss key value ko ham log json ke object me store kr lete hai
      } */
      //we can do the above same thing in shorter way 
      const jsonObject = Object.fromEntries(params);
      console.log(jsonObject);

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