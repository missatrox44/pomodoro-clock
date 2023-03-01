import Task from "./Task";
import { React, useState } from "react";
import { v4 } from "uuid";

function TaskContainer({ roundsCompleted }) {
  const [isHideModal, setIsHideModal] = useState(true);
  const [isHideEditModal, setIsHideEditModal] = useState(true);
  const [name, setName] = useState("");
  const [estimated, setEstimated] = useState(1);
  const placeholderId = v4();
  const [activeTaskId, setActiveTaskId] = useState(placeholderId);
  // name, estimated, actual, completed, id, modalHandler
  const [tasksList, setTasksList] = useState([
    {
      name: "Rename Me",
      estimated: 1,
      // initial: roundsCompleted,
      // final: 0,
      completed: false,
      id: placeholderId,
      modalHandler: modalHandler,
    },
  ]);

  // function getFinal() {
  //   return roundsCompleted;
  // }

  // function getInitialById(id) {
  //   const task = getTaskById(id);
  //   const index = indexOf(task);
  //   const initial = tasksList[index - 1] && tasksList[index - 1].completed ? 
  //   taskslist[index - 1].final + 1 : 
  //   1;
  //   return initial;
  // }

  const [id, setId] = useState(placeholderId);

  // function getFinal() {
  //   return roundsCompleted;
  // }

  // function getInitialById(id) {
  //   const task = getTaskById(id);
  //   const index = tasksList.indexOf(task);
  //   return tasksList[index - 1 > 0 ? index - 1 : 0].final + 1;
  //   // checks if there is a previous task in tasksList. If there is, returns the task.final value from that previous task, +1. If there is no previous task, then it returns 0 (-1 + 1).
  // }

  function modalHandler(type, id) {
    showModal(type);
    setId(id); // Once a user clicks on the open_list icon in the editModal, it will call this function, which will call setId(id), making the current list item's id available in the state, so that it can be consumed by other components.
  }

  function getTaskById(id) {
    const task = tasksList.find((task) => {
      return task.id === id;
    }); // Here we use the array method array.find() to search the tasksList for the task that matches the current working (state) id.
    return task;
  }

  // function actual(id) {
  //   // This function checks whether the task is completed and returns the correct number...
  //   const task = getTaskById(id);
  //   const completed = task.completed;

  //   const final = task.final;
  //   const initial = task.initial;

  //   console.log(
  //     `task.completed = 
  //     ${task.completed}. \n 
  //     true = ${task.final} - ${task.initial} = ${task.final - task.initial} \n 
  //     false = ${roundsCompleted} - ${task.initial}  = ${roundsCompleted - task.initial}`);

  //   const actual = task.completed ? 
  //   (task.final - task.initial) + 1 :
  //    roundsCompleted - task.initial;
  //     return actual;
  // }

  // EDIT MODAL
  // function EditModal() {
  //   const task = getTaskById(id);
  //   return (
  //     <div className="modal edit-modal">
  //       <form onSubmit={handleSubmit}>
  //         <input
  //           type="text"
  //           placeholder={task.name}
  //           value={name}
  //           onChange={handleNameChange}
  //           className="input-field"
  //         />
  //         <br />

  //         <span>
  //           {actual(id)}/{task.estimated} Pomodoros
  //         </span>
  //         <br />
  //         <input
  //           type="number"
  //           placeholder={actual(id).toString()}
  //           onChange={handleEstimatedChange}
  //           className="input-field"
  //           // value={actual}
  //         />
  //         <span>/</span>
  //         <input
  //           type="number"
  //           value={estimated}
  //           placeholder={task.estimated}
  //           onChange={handleEstimatedChange}
  //           className="input-field"
  //         />
  //         <button type="button" onClick={minusOne}>
  //           <span className="material-icons icons">arrow_drop_down</span>
  //         </button>
  //         <button type="button" onClick={addOne}>
  //           <span className="material-icons icons">arrow_drop_up</span>
  //         </button>
  //         <button onClick={() => deleteBtnClicked(id)}>Delete</button>
  //         <button onClick={(e) => cancelBtnClicked(e)}>Cancel</button>
  //         <button type="submit">Save</button>
  //       </form>
  //     </div>
  //   );
  // }

  function showModal(modalType) {
    if (modalType === "edit") {
      console.log("Showing the edit modal.");
      setIsHideEditModal(false);
    } else {
      console.log("Showing the modal.");
      setIsHideModal(false);
    }
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function deleteItem(id, array) {
    const task = getTaskById(id);
    const index = array.indexOf(task);
    const arrayStart = array.slice(0, index - 1);
    const arrayEnd = array.slice(index + 1, -1);
    return arrayStart.concat(arrayEnd);
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

  function handleSubmit(e) {
    e.preventDefault();
    // name, estimated, actual, completed, id,
    const newId = v4();
    const task = {
      name,
      estimated,
      initial: 0,
      final: 0,
      completed: false,
      id: newId,
      running: false,
      actual:0,
    };
    setTasksList([...tasksList, task]);
    setName("");
    setEstimated(1);
    setIsHideModal(true);
  }

  function cancelBtnClicked(e) {
    e.preventDefault();
    console.log("Pressed cancel button.");
    setIsHideModal(true);
  }

  function deleteBtnClicked(taskToDelete) {
    console.log("Deleting " + taskToDelete);
    setIsHideEditModal(true);
    // const newList = deleteItem(id, array);
    // setTasksList(newList);
  }

  function completeTask(id) {
    const task = getTaskById(id);
    task.completed = !task.completed;
    // task.initial = getInitialById(id);
    // task.final = getFinal();
    return task;
  }

  

  function editItem(id, array, func) {
    const task = getTaskById(id);
    const index = array.indexOf(task);
    const editedTask = func(id, array);
    const arrayStart = array.slice(0, index);
    const arrayEnd = array.slice(index + 1, array.length);
    const midArray = arrayStart.concat(editedTask);
    const editedArray = midArray.concat(arrayEnd);
    return editedArray;
  }

  // TODO
  function completedHandler(id) {
    const task = getTaskById(id);
    setTasksList(editItem(id, tasksList, completeTask));
    setTasksList(editItem(id, tasksList, updateActual));
  }

  function updateActual(id){
    const task = getTaskById(id);
    task.actual++;
    return task
  }

  const tasks = tasksList.map((task) => {
    return (
      <Task
        name={task.name}
        estimated={task.estimated}
        // initial={task.initial}
        // final={task.final}
        completed={task.completed}
        id={task.id}
        modalHandler={modalHandler}
        roundsCompleted={roundsCompleted}
        completedHandler={completedHandler}
        actual={task.actual}
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

      {/* Modal */}
      <div className={isHideModal ? "hidden" : ""}>
        <div className="modal">
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="What are you working on?"
                value={name}
                onChange={handleNameChange}
                className="task-input-field"
              />
              <p className="left">Est Pomodoros</p>
              <div className="est-div">
                <input
                  type="number"
                  value={estimated}
                  onChange={handleEstimatedChange}
                  className="num-input-field"
                />
                <button type="button" onClick={minusOne}>
                  <span className="material-icons icons">arrow_drop_down</span>
                </button>
                <button type="button" onClick={addOne}>
                  <span className="material-icons icons">arrow_drop_up</span>
                </button>
              </div>
              <br />
              <div className="button-div">
                <button onClick={(e) => cancelBtnClicked(e)}>Cancel</button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div className={isHideEditModal ? "hidden" : ""}>
        <EditModal />
      </div> */}
    </div>
  );
}

export default TaskContainer;

//             {/* https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el */}
