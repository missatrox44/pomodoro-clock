import Task from "./Task";
import { React, useState, useEffect } from "react";
import { v4 } from "uuid";

function TaskContainer({ roundsCompleted }) {
  const [isHideModal, setIsHideModal] = useState(true);
  const [isHideEditModal, setIsHideEditModal] = useState(true);
  const [name, setName] = useState("");
  const [estimated, setEstimated] = useState(1);
  // const placeholderId = v4();
  const [activeTaskId, setActiveTaskId] = useState(
    // placeholderId
    ''
    );
  // name, estimated, actual, completed, id, modalHandler, actual
  const [tasksList, setTasksList] = useState([
    // {
    //   name: "Rename Me",
    //   estimated: 1,
    //   completed: false,
    //   id: placeholderId,
    //   modalHandler: modalHandler,
    //   actual: 0
    // },
  ]);

  useEffect(() => {
    // const task = getTaskById(activeTaskId); 
    if (tasksList.length > 0){
      setTasksList(editItem(activeTaskId, tasksList, updateActual));
    }
    return () => {
      // clean up
    };
  }, [roundsCompleted]);

  // const [id, setId] = useState(placeholderId);

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
    // name, estimated, actual, completed, id, actual
    // if (!activeTaskId){return;}
    const newId = v4();
    const task = {
      name,
      estimated,
      initial: 0,
      final: 0,
      completed: false,
      id: newId,
      actual:0,
    };
    setTasksList([...tasksList, task]);
    setName("");
    setEstimated(1);
    setIsHideModal(true);
    if (tasksList[tasksList.length - 1]){ 
      if (tasksList[tasksList.length - 1].completed) {setActiveTaskId(newId);}
    } else { setActiveTaskId(newId) }
  } // If the previous task in the queue is marked as completed, or there is no previous task, set this task as currently active.

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
    const index = tasksList.indexOf(task); 
    tasksList[index + 1] ? 
      setActiveTaskId(tasksList[index + 1]) : 
      console.log("Bad!");
    task.completed = !task.completed;
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
