// Import the mongoose library, which is used for working with MongoDB.
const mongoose = require('mongoose');

// Define a schema for the "ToDo" document in the MongoDB collection.
const todoSchema = new mongoose.Schema({
  // Define a field called "text" with the type String.
  text: {
    type: String,
    // The "required" option specifies that this field must have a value.
    required: true,
  },
});

// Create a model for the "ToDo" document using the defined schema, and export it.
module.exports = mongoose.model('ToDo', todoSchema);
