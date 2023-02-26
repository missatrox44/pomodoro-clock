import React from "react";
import Task from "./Task";
import { useState } from "react";
import { v4 } from "uuid";

function TaskContainer() {
  const [isHideModal, setIsHideModal] = useState(true);
  const [isHideEditModal, setIsHideEditModal] = useState(true);
  const [name, setName] = useState("");
  const [estimated, setEstimated] = useState(1);
  const [tasksList, setTasksList] = useState([]);

  function showModal(modalType) {
    if (modalType === "edit") {
      setIsHideEditModal(false);
    } else {
      setIsHideModal(false);
    }
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEstimatedChange(event) {
    setEstimated(Math.max(parseInt(event.target.value), 0));
  }

  function minusOne() {
    if (estimated > 0) {
      setEstimated(estimated - 1);
    } else {
      setEstimated(0);
    }
  }

  function addOne() {
    setEstimated(estimated + 1);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const task = { name, estimated, actual: 0, completed: false };
    setTasksList([...tasksList, task]);
    setName("");
    setEstimated(1);
    setIsHideModal(true);
  }

  function cancelBtnClicked() {
    setIsHideModal(true);
    console.log("pressed cancel button");
  }

  function deleteBtnClicked() {
    setIsHideModal(true);
    console.log("pressed delete button");
  }

  const tasks = tasksList.map((task) => {
    return (
      <Task
        name={task.name}
        estimated={task.estimated}
        actual={task.actual}
        completed={task.completed}
        id={v4()}
        showModal={showModal}
      />
    );
  });

  return (
    <div className="task-container">
      {tasks}
      <button onClick={() => showModal()} className="add-task">
        Add Task
      </button>

      <div className={`${isHideModal ? "hidden" : ""}`}>
        <div className="modal">
          <p>Est Pomodoros</p>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="What are you working on?"
                value={name}
                onChange={handleNameChange}
                className="input-field"
              />
              <input
                type="number"
                value={estimated}
                onChange={handleEstimatedChange}
                className="input-field"
              />
              <button type="button" onClick={minusOne}>
                <span className="material-icons icons">arrow_drop_down</span>
              </button>
              <button type="button" onClick={addOne}>
                <span className="material-icons icons">arrow_drop_up</span>
              </button>
              <button onClick={cancelBtnClicked}>Cancel</button>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>

      <div className={`${isHideEditModal ? "hidden" : ""}`}>
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="What are you working on?"
              value={name}
              onChange={handleNameChange}
              className="input-field"
            />
            <br />
            <span>Act/Estimated Pomodoros</span>
            <br />
            <input
              type="number"
              //TODO
              // value={actual}
              onChange={handleEstimatedChange}
              className="input-field"
            />
            /
            <input
              type="number"
              value={estimated}
              onChange={handleEstimatedChange}
              className="input-field"
            />
            <button type="button" onClick={minusOne}>
              <span className="material-icons icons">arrow_drop_down</span>
            </button>
            <button type="button" onClick={addOne}>
              <span className="material-icons icons">arrow_drop_up</span>
            </button>
            <button onClick={deleteBtnClicked}>Delete</button>
            <button onClick={cancelBtnClicked}>Cancel</button>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskContainer;

//             {/* https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el */}
