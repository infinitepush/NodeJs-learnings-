const path = require('path'); // 

const express = require('express'); 

const userRouter = require("./routes/userRouter");
const {hostRouter} = require('./routes/hostRouter'); //we need to use destructor here 

const app = express(); 


app.use(express.urlencoded());

app.use(userRouter); 
app.use("/host",hostRouter); 
 
app.use(express.static(path.join(__dirname, "public")))

const rootDir = require("./utils/pathUtils");

app.use((req, res, next) => {
  res.status  (404).sendFile(path.join(rootDir, "views", "404page.html")); 
});

const PORT = 3000;
app.listen(PORT, () =>{
  console.log(`Server running on address http://localhost:${PORT}`);
});

  
