//4: Event loop:
//4.1 Event Driven: Ek hota hai event aur ek hota hai uska response (Event handler), isi ko event driven bolte hai kahi par event ho rha hoga toh kahi uska response process ho rha hoga
// for ex: bell ring ke time students ka bhaag jana, bell ring ko ham sunte rehte hai(event listener) and jaise hi ring hui ham back pack krke bhaag jaate hai(event handler)

//4.2: Single  Threaded: As discussed in earlier classes, js is a single threaded lang, all the request and events which we provide get's  done by a single entity i..e, Event Loop(ek baar me sirf ek kaam ho sakta hai), so saari cheezein request,events etc will wait by forming queue and then event loop ek ek karke saare kaam register callback ke through karta rahega aur hone ke baad woh jaake event loop ko inform karega

//4.3 V8 vs Libuv: 
/*
| Feature         | **V8**                          | **libuv**                               |
| --------------- | ------------------------------- | --------------------------------------- |
| **Type**        | JavaScript engine (C++)         | C library                               |
| **Purpose**     | Executes JavaScript code        | Handles async I/O and the event loop    |
| **Used for**    | Parsing, compiling, running JS  | File system, network, timers, etc.      |
| **Created by**  | Google                          | Originally by Joyent (for Node.js)      |
| **Used in**     | Chrome, Node.js                 | Node.js                                 |
| **Threading**   | Single-threaded JS execution    | Multi-threaded under the hood (for I/O) |
| **Memory Mgmt** | Handles garbage collection (GC) | No GC, just native I/O ops              |
*/

//4.4: Node Runtime: wahi upar ka chiz ki kaise V8 engine aur libuv sath me milkr program execute krwate hai
console.log("Starting Nodejs");
db.query("Select * From public.cars", function(res,res){
  console.log("Query Executed");
});
console.log("Before query executed");
// right here first starting nodejs will be printed then before query executed and then query executed
// this is coz async function/nature of libuv   