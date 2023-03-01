import React, { useState } from 'react';

function Task({ name, estimated, completed, id, modalHandler, roundsCompleted, completedHandler, actual }) {

  return (
    <div className='task-list-item' id={id}>
      <div
        onClick={() => completedHandler(id)}
        className={`material-icons icons ${
         completed ? 'task-completed' : 'in-progress'
        }`}>
        check_circle_outline
      </div>
      <span>{name}</span>
      <span>
        {actual}
        /
        {estimated}
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
