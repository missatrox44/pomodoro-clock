import React from "react";
import { useState } from "react";

function TimerControls() {
  const [timeLeft, setTimeLeft] = useState(25);
  //handler function exports timeLeft
  function timeLeftHandler(time) {}

  return (
    <div className="ControlMenu">
      <button onClick={timeLeftHandler(25)}>Pomodoro</button>
      <button onClick={timeLeftHandler(5)}>Short Break</button>
      <button onClick={timeLeftHandler(15)}>Long Break</button>
    </div>
  );
}

export default TimerControls;
