import React, { useState } from "react";

function Task({ name, estimated, actual, completed, id, modalHandler }) {
  console.log("This is id from Task function: " + id);

  const [isComplete, setIsComplete] = useState(false);
  function handleClickIcon() {
    setIsComplete(!isComplete);
  }

  return (
    <div className="task-list-item" id={id}>
      <div
        onClick={() => handleClickIcon()}
        className={`material-icons icons ${
          isComplete ? "task-completed" : "in-progress"
        }`}>
        check_circle_outline
      </div>
      <span>{name}</span>
      <span>
        {actual}/{estimated}
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
