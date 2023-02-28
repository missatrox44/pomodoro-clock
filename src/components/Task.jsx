import React from "react";

function Task({ name, estimated, initial, final, completed, id, modalHandler, roundsCompleted }) {
  console.log("This is id from Task function: " + id);
  return (
    <div className="task-list-item" id={id}>
      <span>{name}</span>
      <span>
        {completed? final-roundsCompleted : roundsCompleted-initial}/{estimated}
      </span>
      <span>{completed ? "Completed" : "In progress"}</span>
      {/* <span 
        onClick={() => modalHandler('edit', id)} 
        className="material-icons">
        menu_open
      </span> */}
    </div>
  );
}

export default Task;
