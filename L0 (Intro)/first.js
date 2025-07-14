console.log("Hello world");
const fs = require('fs');

let a = 10;
let b = 20;

let sum = a+b;
let prod = a*b;

let data = `sum: ${sum}\nProduct: ${prod}`;
console.log(data);

//write the data to a local file
fs.writeFile(`output.txt`, data, (err) => {
  if (err) throw err;
  console.log('Data written to file');
});
// Node js has file writting capabilities
// So upto this was how can we run node js by making files 
// There's a thing called 'REPL' {read evaluate print loop}
// It's basically the browser console in your terminal means it acts the same way as browser code execution
// to instantiate just write Node and to exit then ctrl+c
