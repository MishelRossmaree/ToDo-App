// Import the 'express' and 'mongoose' libraries.
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")


// Import the defined routes from the './routes/ToDoRoute' module.
const routes = require('./routes/ToDoRoute'); 

// Load environment variables from a '.env' file into process.env.
require('dotenv').config();

// Create an instance of the Express application.
const app = express();

// Define the port where the server will listen for incoming requests.
const PORT = process.env.PORT || 5000;

// Middleware: Parse incoming JSON data and add it to the request body.
app.use(express.json());
// Middleware: Enable Cross-Origin Resource Sharing (CORS) to allow cross-origin requests.
app.use(cors());

// Establish a connection to MongoDB using the connection string from the environment variables.
mongoose
  .connect(process.env.MONGODB_URL) // Connect to the MongoDB specified in the MONGODB_URL environment variable.
  .then(() => console.log('Connected to MongoDB')) // If the connection is successful, log a message.
  .catch((err) => console.log(err)); // If there's an error during the connection, log the error message.

  app.use(routes); // Use the imported 'routes' to define the routes for the Express application.
  
  // Set up an event listener for the Express application to start listening on the specified port.
app.listen(PORT, () => console.log(`Listening on : ${PORT}`));
