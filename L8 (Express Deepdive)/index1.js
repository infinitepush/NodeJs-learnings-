//8.1: Parsing Requests: in the previous practice question instead of writing so much in the contact-us  (POST) middleware we can use build in express method known as body parsor and with this we can directly parse our body without much writing . first install it by: node install bodyparser --save
// the code is : const bodyParser = require('body-parser'); //called the body parser and saved it
// app.use(bodyParser.urlencoded()); // paste it wherever you want to parse the body 

// we will create a airbnb server project and will see how things work:: we will create for both side, as the hoster(one who is hosting his house) and the user(one who is looking for the house)

//8.2: Express Router: Listen we wanted to handle user pages and admin pages on different folders so we created routes folder so that we can seperate them. Now to use the app.get method we need app in that folder but it is outside routes folder there comes the concept of routing 
// and the code we will write to link is : const userRouter = express.Router();
// so basically we just create different routers in which we store different modules and then import them in our app.js file

//8.3: Adding 404 error: 

