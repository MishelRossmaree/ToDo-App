// Import the ToDoModel, which presumably represents a Mongoose model for a "ToDo" item.
const ToDoModel = require('../models/ToDoModel');

// Define a controller function to retrieve all "ToDo" items from the database and send them as a response.
module.exports.getToDo = async (req, res) => {
  // Use the Mongoose model to find all "ToDo" items in the database.
  const toDo = await ToDoModel.find();
  // Send the retrieved "ToDo" items as the response to the client.
  res.send(toDo);
};

// Define a controller function to save a new "ToDo" item in the database.
module.exports.saveToDo = async (req, res) => {
  // Extract the "text" property from the request body.
  const { text } = req.body;

  // Use the Mongoose model to create a new "ToDo" item in the database with the extracted text.
  ToDoModel.create({ text }).then((data) => {
    // Log a message to indicate that the item was added successfully.
    console.log('Added Successfully');

    // Log the data (the newly created "ToDo" item) to the console for debugging purposes.
    console.log(data);

    // Send the newly created "ToDo" item as a response to the client.
    res.send(data);
  });
};
// Define a controller function to update a "ToDo" item in the database.
module.exports.updateToDo = async (req, res) => {
  // Extract the "_id" and "text" properties from the request body.
  const { _id, text } = req.body;

  // Use the Mongoose model to find and update a "ToDo" item by its "_id" with the specified "text."
  ToDoModel.findByIdAndUpdate(_id, { text })
    // Respond with a success message if the update is successful.
    .then(() => res.send('Updated Successfully...'))
    .catch((err) => console.log(err)); // Log any errors to the console if the update encounters issues.
};

// Define a controller function to delete a "ToDo" item from the database.
module.exports.deleteToDo = async (req, res) => {
  // Extract the "_id" and "text" properties from the request body.
  const { _id, text } = req.body;

  // Use the Mongoose model to find and delete a "ToDo" item by its "_id."
  ToDoModel.findByIdAndDelete(_id)
    // Respond with a success message if the deletion is successful.
    .then(() => res.send('Deleted Successfully...'))
    .catch((err) => console.log(err)); // Log any errors to the console if the deletion encounters issues.
};
