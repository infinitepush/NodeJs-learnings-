//4.5: Event Loop: a series of tasks that event loop  performs according to their priority order

//4.6: Async Code: 
// we will see the example of calculator practie problem to understand Async code:
const sumReqHandler = (req,res) =>{
  console.log("1. In sum request Handler", req.url);
  const body = [];
  let result;
  req.n('data', chunk =>{
    body.push(chunk);
    console.log("2. chunk came");
  });
  req.on('end',() =>{
    console.log("3. End Event came");
    const bodyStr = Buffer.concat(body).bodyStr();
    const params = new URLSearchParams(bodyStr);
    const bodyObject = Object.fromEntries(params);
    result = Number(bodyObject.first) + Number(bodyObject.second);
    console.log(Result); 
  });// now we will print the html/response part outside this callback end function then woh inse pehle hi execute hojaega
  console.log("4. Sending the Response");
  res.setHeader('Content-type', 'text/html');
  res.write(`
    <html>
    <head><title>Summation</title></head>
    <body>
    <h1> Your sum is ${result}</h1>
    </body>
    </html>
    `);
    return res.end();
}// this is half code just logic
// the output will be: 1-->4-->2-->3
//this is coz the async func will run later and other will run as soon as possible, when the 4th i..e, response is written outside the end function, the response is executed before the callback end. 
