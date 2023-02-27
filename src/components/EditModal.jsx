// This modal is so complex in part because it both: 
// a) accepts input from the user,
// b) and displays UI to the user, 
// How can this be simplified? Can we compose this modal from smaller 
// components? Perhaps components that do only a, or b? 

export default function EditModal({ tasksList, id, estimated, deleteBtnClicked, cancelBtnClicked, handleEstimatedChange, handleSubmit, handleNameChange }) {
    const task = tasksList.find((task) => 
    { 
      console.log(task.id + "\n" + id);
      console.log("Match? " + (task.id === id));
      return (task.id === id )}
    ); // Here we use the array method array.find() to search the tasksList for the task that matches the current working (state) id. Once we have that task, we can render its properties in this component...

    console.log("Task: " + task.name)
    // name, estimated, actual, completed, id, modalHandler
    return (
  
  <div className="modal edit-modal">
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder={task.name}
      value={name}
      onChange={() => handleNameChange()}
      className="input-field"
    />
    <br />
    <span>{task.actual}/{task.estimated} Pomodoros</span>
    <br />
    <input
      type="number"
      //TODO
      // value={actual}
      placeholder={task.actual}
      onChange={handleEstimatedChange}
      className="input-field"
    />
    <span>/</span>
    <input
      type="number"
      value={estimated}
      placeholder={task.estimated}
      onChange={handleEstimatedChange}
      className="input-field"
    />
    <button type="button" onClick={minusOne}>
      <span className="material-icons icons">arrow_drop_down</span>
    </button>
    <button type="button" onClick={addOne}>
      <span className="material-icons icons">arrow_drop_up</span>
    </button>
    <button onClick={()=>deleteBtnClicked(id)}>Delete</button>
    <button onClick={cancelBtnClicked}>Cancel</button>
    <button type="submit">Save</button>
  </form>
</div>
    )
  }