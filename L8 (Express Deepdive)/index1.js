//8.1: Parsing Requests: in the previous practice question instead of writing so much in the contact-us  (POST) middleware we can use build in express method known as body parsor and with this we can directly parse our body without much writing . first install it by: node install bodyparser --save
// the code is : const bodyParser = require('body-parser'); //called the body parser and saved it
// app.use(bodyParser.urlencoded()); // paste it wherever you want to parse the body 

// we will create a airbnb server project and will see how things work:: we will create for both side, as the hoster(one who is hosting his house) and the user(one who is looking for the house)

//8.2: Express Router: Listen we wanted to handle user pages and admin pages on different folders so we created routes folder so that we can seperate them. Now to use the app.get method we need app in that folder but it is outside routes folder there comes the concept of routing 
// and the code we will write to link is : const userRouter = express.Router();
// so basically we just create different routers in which we store different modules and then import them in our app.js file

//8.3: Adding 404 error: though 404 error is inbuilt by express.js but here we will add our own unqiue 404 error, along with correct status code, check in the codes it's already there

//8.4: common paths: we can also assign paths based on the common paths we will give, like in our airbnb case /host is the common path for doing all the hosting work in airbnb.. so we can assign any path after /host so that every url using /host will be acted by the common path.. In app.use we can give common path and then we can use it while hosting look at the program app.js and hostRouter , In app.js we can give path (/host in our case) in app.use, the thing is that it will be a good practice to track and avoid error in router handling.

//8.5 Adding HTML files: See it's not at all advisable to write html codes here in .js folder so just like we created a route folder for managing routes paths, in the same way we can create a 'views' folder where we will store our html codes. Here we can write html codes for home page, add home page, response page etc to make things organize

//8.6: Serving HTML Files: Here we will deal after the creation of html fiesl, how we are going to use them in our codes, so we will use our another core module that is path.. and also after defining it we must send path correctly see codes dhyan se dekhna pehle back kiye phir views me gye and then phir uss html file me

//8.7: Using FIle Helper: Previously in serving html files we were using relative path but we can also use absolute path to correctly provide the path. Like in app.js i didn't use ../ also in future if i do any changes then i have to change the entire path again so to avoid all these chaos we will use absolute path to located our html files in our routes & files.
// so we will create a folder named as util which will store our absolute path and we will give that util path to rest of the files 