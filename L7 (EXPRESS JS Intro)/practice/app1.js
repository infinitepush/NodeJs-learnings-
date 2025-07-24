// server creation
const express = require('express');
const userHandling = require('./user1'); // Renamed for clarity
const app1 = express();

// Two dummy middleware that logs request paths and request method
app1.use((req, res, next) => {
  console.log(`Request path: ${req.path}`);
  next();
});

app1.use((req, res, next) => {
  console.log(`Request method: ${req.method}`);
  next();
});

// FIX: Use the imported routes from './user1'
app1.use(userHandling);

// FIX: Moved the 404 handler to be the LAST middleware
app1.use((req, res, next) => {
  res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start the server
const port = 3000;
app1.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});