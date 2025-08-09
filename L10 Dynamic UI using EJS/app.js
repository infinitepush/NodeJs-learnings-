const path = require('path'); // 

const express = require('express'); 

const userRouter = require("./routes/userRouter");
const {hostRouter} = require('./routes/hostRouter'); 

const app = express(); 

 app.set ('view engine', 'ejs'); //we just informed express that we are using ejs template engine
 app.set ('views', 'views');


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

  
