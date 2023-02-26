import React from "react";
import Task from "./Task";
import { useState } from "react";
// import Modal from "./Modal";

const tasks = []

function createTask(name, est, actual=0, completed=false){
  const task = { name: 'name', est: 0, actual: 0, completed: Boolean } 
  tasks.push(task);
  console.log(task);
}

function TaskContainer() {
  const [isHideModal, setIsHideModal] = useState(true);
  // const [roundsEstimated, setRoundsEstimated] = useState(1);
  // const [input, setInput] = useState("");
  const [taskData, setTaskData] = useState({name:'', estimated:1});

  function showModal() {
    setIsHideModal(false);
  }

  function handleChange(e) {
    setInput;
  }

  function addOne() {
    setTaskData(taskData.estimated + 1);
  }

  function minusOne() {
    if (taskData.estimated > 0) {
      setTaskData(taskData.estimated - 1);
    }
    else {
      setTaskData.estimated(0)
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
      
      <p>Est Pomodoros</p>
      <div>
      <form>

      {/* https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el */}

        <input
          type="text"
          className="input-field"
          name="task"
          placeholder="What are you working on?"
          onChange={handleChange}
          value={taskData.name}
        />
          <input
            type="text"
            className="input-field"
            name="num"
            placeholder="1"
            onChange={handleChange}
            value={taskData.estimated}
          />
          <button onClick={addOne}>+1</button>
          <button onClick={minusOne}>-1</button>
          
          <div>
            <button onClick={()=>{cancel()}}>Cancel</button>
            <button onClick={()=>{save()}}>Save</button>
          </div>

        </form>


      </div>

    </div>
      </div>

    </div>
  );


}



export default TaskContainer;

