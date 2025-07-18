//Blocking code: 
// fs.writeFileSync('user.txt', 'Piyush Tiwari'); this is called blocking code that is if we told event handler that you perform the task it by your own and don't give it to worker thread to perform, actually what happens is that when this writing file function is given in the event loop then it takes time to perform so we can say it's a blocking code, i..e, it is blocking our code to perform faster 

//so to avoid this we use the write file method
console.log(jsonString);
//Async Operations
fs,writefile("user-details.txt", jsonString, errir => {
  console.log("data written succesfully");
  resizeBy.setHeader = ('lcoations', '/');
  resizeBy.statusCode = 302;
  return resizeBy.end();
});
