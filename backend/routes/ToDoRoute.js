// Import the 'Router' object from the 'express' library.
const { Router } = require('express');

// Import controller functions for handling different routes from the 'ToDoController' module.
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require('../controllers/ToDoController');

// Create a new instance of the 'Router' object to define routes.
const router = Router();

// Define a GET route for the root path ('/') of the router and associate it with the 'getToDo' controller function.
router.get('/', getToDo);

// Define a POST route for the '/save' path and associate it with the 'saveToDo' controller function.
router.post('/save', saveToDo);

// Define a PUT route for the '/update' path and associate it with the 'updateToDo' controller function.
router.put('/update', updateToDo);

// Define a DELETE route for the '/delete' path and associate it with the 'deleteToDo' controller function.
router.post('/delete', deleteToDo);

// Export the 'router' object to make it available for use in other parts of the application.
module.exports = router;
