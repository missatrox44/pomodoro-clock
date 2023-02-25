import React from "react";
import { useState } from "react";

function Modal() {
  const [roundsEstimated, setRoundsEstimated] = useState(1);

  const [input, setInput] = useState("");

  //not sure if we need to manage this state somewhere else
  // const [isHideModal, setIsHideModal] = useState(true);

  // function showModal() {
  //   setIsHideModal(false);
  // }

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
    setIsHidden(true);
  }

  function save() {
    // setIsHideModal(true);
    //function to add task item to list goes here
  }

  return (
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
  );
}

export default Modal;
