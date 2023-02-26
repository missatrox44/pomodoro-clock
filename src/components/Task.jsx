import React from "react";

function Task({ name, estimated, actual, completed }) {
  return (
    <div className="task-list-item">
      <span>{name}</span>
      <span>
        {actual}/{estimated}
      </span>
      <span>{completed ? "Completed" : "In progress"}</span>
      <span className="material-icons">menu_open</span>
    </div>
  );
}

export default Task;
