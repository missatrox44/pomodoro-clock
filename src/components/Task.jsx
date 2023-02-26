import React from "react";

function Task({ name, estimated, actual, completed, showModal }) {
  return (
    <div className="task-list-item">
      <span>{name}</span>
      <span>
        {actual}/{estimated}
      </span>
      <span>{completed ? "Completed" : "In progress"}</span>
      <span onClick={() => showModal("edit")} className="material-icons">
        menu_open
      </span>
    </div>
  );
}

export default Task;
