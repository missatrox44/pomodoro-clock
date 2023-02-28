import React, { useState } from 'react';

function Task({ name, estimated, initial, final, completed, id, modalHandler, roundsCompleted, completedHandler }) {
  console.log('This is id from Task function: ' + id);

  // const [isComplete, setIsComplete] = useState(false);
  // function handleClickIcon() {
  //   setIsComplete(!isComplete);
  // }

  return (
    <div className='task-list-item' id={id}>
      <div
        onClick={() => completedHandler (id)}
        className={`material-icons icons ${
         completed ? 'task-completed' : 'in-progress'
        }`}>
        check_circle_outline
      </div>
      <span>{name}</span>
      <span>
        {completed? final-roundsCompleted : roundsCompleted-initial}/{estimated}
      </span>
      <span>{completed ? 'Completed' : 'In progress'}</span>
      {/* <span 
        onClick={() => modalHandler('edit', id)} 
        className='material-icons'>
        menu_open
      </span> */}
    </div>
  );
}

export default Task;
