import React from "react";
import Task from "./Task";
import { useState } from "react";
// import Modal from "./Modal";

function TaskContainer() {
  const [isHideModal, setIsHideModal] = useState(true);
  // const [roundsEstimated, setRoundsEstimated] = useState(1);
  // const [input, setInput] = useState("");
  // const [taskData, setTaskData] = useState({name:'', estimated:1});
  const [name, setName] = useState("");
  const [estimated, setEstimated] = useState(1);
  const [tasksList, setTasksList] = useState([]);

  function showModal() {
    setIsHideModal(false);
  }

  //function that tracks value of name input
  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEstimatedChange(event) {
    //totally copy and pasted the next line but i know that Math.max is used to make sure the number is not negative. parseInt takes the value of input and turns it into a number, might be overkill
    setEstimated(Math.max(parseInt(event.target.value), 0));
  }

  //decrement function
  function minusOne() {
    if (estimated > 0) {
      setEstimated(estimated - 1);
    } else {
      setEstimated(0);
    }
  }

  //increment function
  function addOne() {
    setEstimated(estimated + 1);
  }

  //Save button functionality where the magic happens
  function handleSubmit(event) {
    event.preventDefault();
    //define task object
    const task = { name, estimated, actual: 0, completed: false };
    //pushes task object to tasksList array
    setTasksList([...tasksList, task]);
    console.log("task added", task);
    console.log("tasksList", tasksList);
    //clears out input
    setName("");
    setEstimated(0);
    setIsHideModal(true);
  }

  function cancelBtnClicked() {
    setIsHideModal(true);
    console.log("pressed cancel button");
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="What are you working on?"
                value={name}
                onChange={handleNameChange}
              />
              <input
                type="number"
                value={estimated}
                onChange={handleEstimatedChange}
              />
              <button type="button" onClick={minusOne}>
                -1
              </button>
              <button type="button" onClick={addOne}>
                +1
              </button>
              <button onClick={cancelBtnClicked}>Cancel</button>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskContainer;



// Old form:
//             {/* <form> */}

//             {/* https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el */}
//             {/*
//         <input
//           type="text"
//           className="input-field"
//           name="task"
//           placeholder="What are you working on?"
//           onChange={handleChange}
//           value={taskData.name}
//         />
//           <input
//             type="text"
//             className="input-field"
//             name="num"
//             placeholder="1"
//             onChange={handleChange}
//             value={taskData.estimated}
//           />
//           <button onClick={addOne}>+1</button>
//           <button onClick={minusOne}>-1</button>

//           <div>
//             <button onClick={()=>{cancel()}}>Cancel</button>
//             <button onClick={()=>{save()}}>Save</button>
//           </div>

//         </form> */}
