import React from "react";
import Task from "./Task";
import { useState } from "react";
import { v4 } from "uuid";
import EditModal from "./EditModal";

function TaskContainer() {
  const [isHideModal, setIsHideModal] = useState(true);
  const [isHideEditModal, setIsHideEditModal] = useState(true);
  const [name, setName] = useState("");
  const [estimated, setEstimated] = useState(1);
  const placeholderId = v4()
  // name, estimated, actual, completed, id, modalHandler
  const [tasksList, setTasksList] = useState([{name:'Rename Me', estimated:1, actual:0, completed: false, id: placeholderId, modalHandler: modalHandler}]);
  const [id, setId] = useState(placeholderId);

  function modalHandler(type, id){
    showModal(type);
    setId(id); // Once a user clicks on the open_list icon in the editModal, it will call this function, which will call setId(id), making that list item's id available in the state, so that it can be consumed by other components.
  }
  
//   function EditModal() {
//     const task = tasksList.find((task) => 
//     { 
//       console.log(task.id + "\n" + id);
//       console.log("Match? " + (task.id === id));
//       return (task.id === id )}
//     ); // Here we use the array method array.find() to search the tasksList for the task that matches the current working (state) id. Once we have that task, we can render its properties in this component...

//     console.log("Task: " + task.name)
//     // name, estimated, actual, completed, id, modalHandler
//     return (
  
//   <div className="modal edit-modal">
//   <form onSubmit={handleSubmit}>
//     <input
//       type="text"
//       placeholder={task.name}
//       value={name}
//       onChange={handleNameChange}
//       className="input-field"
//     />
//     <br />
//     <span>{task.actual}/{task.estimated} Pomodoros</span>
//     <br />
//     <input
//       type="number"
//       //TODO
//       // value={actual}
//       placeholder={task.actual}
//       onChange={handleEstimatedChange}
//       className="input-field"
//     />
//     <span>/</span>
//     <input
//       type="number"
//       value={estimated}
//       placeholder={task.estimated}
//       onChange={handleEstimatedChange}
//       className="input-field"
//     />
//     <button type="button" onClick={minusOne}>
//       <span className="material-icons icons">arrow_drop_down</span>
//     </button>
//     <button type="button" onClick={addOne}>
//       <span className="material-icons icons">arrow_drop_up</span>
//     </button>
//     <button onClick={()=>deleteBtnClicked(id)}>Delete</button>
//     <button onClick={cancelBtnClicked}>Cancel</button>
//     <button type="submit">Save</button>
//   </form>
// </div>
//     )
//   }

  function showModal(modalType) {
    if (modalType === "edit") {
      console.log("Showing the edit modal.")
      setIsHideEditModal(false);
    } else {
      console.log("Showing the modal.")
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
    // name, estimated, actual, completed, id,
    const newId = v4()
    const task = { name, estimated, actual: 0, completed: false, id:newId};
    setTasksList([...tasksList, task]);
    setName("");
    setEstimated(1);
    setIsHideModal(true);
  }

  function cancelBtnClicked() {
    setIsHideModal(true);
    console.log("Pressed cancel button.");
  }

  function deleteBtnClicked(taskToDelete) {
    setIsHideEditModal(true);
    console.log("Deleting " + taskToDelete);
  }

  const tasks = tasksList.map((task) => {
    return (
      <Task
        name={task.name}
        estimated={task.estimated}
        actual={task.actual}
        completed={task.completed}
        id={task.id}
        modalHandler={modalHandler}
        key={task.id}
      />
    );
  });

  return (
    <div className="task-container">
      {tasks}
      <button onClick={() => showModal()} className="add-task">
        Add Task
      </button>

      <div className={isHideModal ? "hidden" : ""}>
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

      <div className={isHideEditModal ? "hidden" : ""}>
        {/* <EditModal /> */}
        <EditModal tasksList={tasksList} id={id} estimated={estimated}deleteBtnClicked={deleteBtnClicked} cancelBtnClicked={cancelBtnClicked} handleEstimatedChange={handleEstimatedChange} handleSubmit={handleSubmit} handleNameChange={handleNameChange}/>
        
     </div>

    </div>
  );
}

export default TaskContainer;

//             {/* https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el */}
