import React from 'react'; // Importing React for using React components
import { BiEdit } from 'react-icons/bi'; // Importing the BiEdit icon from the react-icons/bi package
import { AiFillDelete } from 'react-icons/ai'; // Importing the AiFillDelete icon from the react-icons/ai package

const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className='todo'> {/* Parent div with class 'toDo' */}
      <div className='text'>{text}</div> {/* Div to display the 'text' prop passed as a parameter */}
      <div className='icons'> {/* Div for holding icons */}
        <BiEdit className='icon' onClick={updateMode} /> {/* BiEdit icon with an onClick event for 'updateMode' */}
        <AiFillDelete className='icon' onClick={deleteToDo} /> {/* AiFillDelete icon with an onClick event for 'deleteToDo' */}
      </div>
    </div>  
  );
}

export default ToDo; // Exporting the ToDo component as the default export
