import React from "react";
import Task from "./Task";
import { useState } from "react";
// import Modal from "./Modal";

function TaskContainer() {
  const [isHideModal, setIsHideModal] = useState(true);

  const [roundsEstimated, setRoundsEstimated] = useState(1);

  const [input, setInput] = useState("");

  function showModal() {
    setIsHideModal(false);
  }

  function handleChange(e) {
    // setInput;
  }

  function addOne() {
    setRoundsEstimated(roundsEstimated + 1);
  }

  function minusOne() {
    if (roundsEstimated > 0) {
      setRoundsEstimated(roundsEstimated - 1);
    }
    else {
      setRoundsEstimated(0)
    }
  }

  function cancel() {
    setIsHideModal(true);
  }

  function save() {
    setIsHideModal(true);
    //function to add task item to list goes here
  }

  return (
    <div className="task-container">
      <Task />
      <button onClick={showModal} className="add-task">
        Add Task
      </button>

      <div className={`${isHideModal ? "hidden" : ""}`}> 
      <div className="pomodoro-creation-menu">
      <input
        type="text"
        className="input-field"
        name="task"
        placeholder="What are you working on?"
        onChange={handleChange}
        // value={task}
      />
      <p>Est Pomodoros</p>
      <div>
        <input
          type="text"
          className="input-field"
          name="num"
          placeholder="1"
          onChange={handleChange}
          value={roundsEstimated}
        />
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
      </div>
      <div>
        <button onClick={()=>{cancel()}}>Cancel</button>
        <button onClick={()=>{save()}}>Save</button>
      </div>
    </div>
      </div>

    </div>
  );


}



export default TaskContainer;

