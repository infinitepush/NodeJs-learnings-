
const express = require('express'); //import the express library 
const app1 = express(); //created an instance of express named as app1

//Adding handling to both Homepage and contact us page using GET and two middlewares
app1.get('/', (req, res, next) => { //homepage
  res.send(`<h1>Welcome to the Home page!</h1>`);
});

app1.get('/contact-us', (req, res, next) => { //homepage
  res.send(`
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Us</title>
            <style>
                body { font-family: sans-serif; padding: 20px; }
                form { display: flex; flex-direction: column; width: 300px; }
                input { margin-bottom: 10px; padding: 8px; }
                button { padding: 10px; cursor: pointer; }
            </style>
        </head>
        <body>
            <h1>Contact Us</h1>
            <form action="/contact-us" method="POST">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
});

//Now the contact-us form should return name and email using POST operation
app1.post('/contact-us',(req, res, next) => {
   const { name, email } = req.body;
    console.log('Form Submission Received');
    console.log('Name:', name);
    console.log('Email:', email);
    res.send('<h1>Thank you for contacting us!</h1><p>We have received your submission.</p>');
}); // these post handling can be done by using body parser also we will learn it in next chapter


module.exports= app1;