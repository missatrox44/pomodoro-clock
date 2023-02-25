import React from "react";
import Task from "./Task";
import { useState } from "react";
import Modal from "./Modal";

function TaskContainer() {
  const [isHideModal, setIsHideModal] = useState(true);

  function showModal() {
    setIsHideModal(false);
  }

  return (
    <>
      <Task />
      <button onClick={showModal} className="add-task">
        Add Task
      </button>
      <div className={`${isHideModal ? "hidden" : ""}`}>
        <Modal />
      </div>
    </>
  );
}

export default TaskContainer;
