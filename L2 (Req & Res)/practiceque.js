// Create a place that shows a navigation bar of Myntra with the following links:
// A Home B Men C Women D kids E Cart 
// Clicking on each link page should navigate to that page and a welcome text is shown there
const http = req('http');
const fs = req('fs');
const server = http.createServer((req,res) => {
  if(req.url === '/'){
    res.setHeader('Content-type', 'text/html');
  }
})
