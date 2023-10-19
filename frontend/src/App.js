import { useEffect, useState } from 'react';
import ToDo from './components/ToDo'; // Importing the ToDo component from a local file
import { addToDo, getAllToDo, updateToDo, deleteToDo } from './utils/HandleApi';

function App() {
  // Define state variables for managing to-do items and input text
  const [toDo, setToDo] = useState([]);
  // Initialize 'toDo' as an empty array, to hold to-do items.
  const [text, setText] = useState('');
  // Initialize 'text' as an empty string, to hold input text.

  // State variables for update mode and the ID of the item being updated
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState('');
  // 'isUpdating' manages the update mode, and 'toDoId' stores the ID of the item being updated.

  // Function to set the component into update mode
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
    // 'updateMode' sets the component into update mode with the given item's ID and text.
  };

  // Use the 'useEffect' hook to fetch to-do items when the component mounts
  useEffect(() => {
    getAllToDo(setToDo);
    // Call 'getAllToDo' to fetch and update the to-do items using 'setToDo'.
  }, []);

  return (
    <div className="App">
      {/* Parent div with class "App" */}
      <div className="container">
        {/* Child div with class "container" */}
        <h1>ToDo App</h1>
        {/* Heading displaying "ToDo App" */}
        <div className="top">
          {/* Nested div with class "top" */}
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {/* Text input field with a placeholder, controlled by the 'text' state.
             The 'onChange' event updates the 'text' state with the input's value. */}
          <div
            className="add"
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? 'Update' : 'Add'}
          </div>
          {/* A div for adding new items with an onClick event. It calls 'addToDo' function if not in update mode,
             or 'updateToDo' if in update mode. The text displayed depends on 'isUpdating' value. */}
        </div>
        {/* Closing "top" div */}
        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
          {/* Map through 'toDo' items and render a 'ToDo' component for each.
             The 'updateMode' function is passed to the 'ToDo' component to handle updates. */}
        </div>
      </div>
    </div>
  );
}

export default App;
// Exporting the "App" component as the default export
