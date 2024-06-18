// Import the express package, which is necessary for creating the server and handling HTTP requests and responses.
const express = require('express');

// Create an instance of an Express application. 
// The `app` variable will be used to define routes and middleware for the application.
const app = express();

// Import the argument controller from the controllers directory.
// This module contains the logic to handle specific routes related to arguments.
const argumentController = require('./controllers/argumentController'); 

// Middleware to parse incoming JSON requests and put the parsed data in `req.body`. 
// This is essential for handling JSON data sent in POST requests.
app.use(express.json());

// Set up a route to handle POST requests to the `/api/arguments` endpoint.
// When a POST request is received at this endpoint, the `createArgument` function from `argumentController` is called to handle the request.
app.post('/api/arguments', argumentController.createArgument);


// new route for retrieving arguments by session ID
app.get('/api/arguments/:sessionId', argumentController.getArgumentsBySessionId);


// Set the `PORT` variable to the value of the environment variable `PORT` if it exists; 
// otherwise, default to 3000. This is useful for configuring the server port in different environments.
const PORT = process.env.PORT || 3000;

// Start the Express server and listen for incoming connections on the specified `PORT`.
// Once the server is running, log a message to the console indicating the port on which the server is running.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});