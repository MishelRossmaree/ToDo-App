import axios from 'axios';
// Import the Axios library, which is used for making HTTP requests.

const baseUrl = 'http://localhost:5000';
// Define the base URL for your API, assuming it's running locally on port 5000.

const getAllToDo = (setToDo) => {
  // Define a function called 'getAllToDo' that takes a 'setToDo' function as a parameter.

  axios.get(baseUrl).then(({ data }) => {
    // Make a GET request to the specified URL and handle the response data.

    console.log('data --->', data);
    // Log the received data to the console for debugging purposes.

    setToDo(data);
    // Update the 'toDo' state with the received data using the 'setToDo' function.
  });
};

const addToDo = (text, setText, setToDo) => {
  // Define a function 'addToDo' that takes 'text', 'setText', and 'setToDo' as parameters.

  axios
    .post(`${baseUrl}/save`, { text })
    // Make a POST request to the specified URL to save a new to-do item.
    // The 'text' parameter is sent as the data to be saved.

    .then((data) => {
      // Handle the response data from the POST request.
      console.log(data); // Log the response data to the console for debugging.

      setText('');
      // Clear the input field by setting 'text' to an empty string.

      getAllToDo(setToDo);
      // Fetch and update the to-do items using 'getAllToDo' and 'setToDo'.
    })
    .catch((err) => console.log(err));
};

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  // Define a function 'updateToDo' that takes 'toDoId', 'text', 'setToDo', 'setText', and 'setIsUpdating' as parameters.

  axios
    .put(`${baseUrl}/update`, { _id: toDoId, text })
    // Make a PUT request to the specified URL to update a to-do item.
    // The '_id' and 'text' parameters are sent as data to update the item.

    .then((data) => {
      // Handle the response data from the PUT request.
      console.log(data); // Log the response data to the console for debugging.

      setText('');
      // Clear the input field by setting 'text' to an empty string.

      setIsUpdating(false);
      // Set 'isUpdating' to false to exit the update mode.

      getAllToDo(setToDo);
      // Fetch and update the to-do items using 'getAllToDo' and 'setToDo'.
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
  // Define a function 'deleteToDo' that takes '_id' and 'setToDo' as parameters.

  axios
    .post(`${baseUrl}/delete`, { _id })
    // Make a DELETE request to the specified URL to delete a to-do item.
    // Include the '_id' in the URL as a parameter.

    .then((response) => {
      // Handle the response from the DELETE request.
      console.log(response.data); // Log the response data to the console for debugging.

      getAllToDo(setToDo);
      // Fetch and update the to-do items using 'getAllToDo' and 'setToDo'.
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
// Export the 'getAllToDo', 'addToDo', 'updateToDo', and 'deleteToDo' functions for use in other parts of the application.
