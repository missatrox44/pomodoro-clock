import React from "react";
import { useState } from "react";



function TimerControls() {
  const [timeLeft, setTimeLeft] = useState(25000*60);

  function onStartingTimeChange(time) {
    setTimeLeft(time);
  }

  return (
    <div className="ControlMenu">
      <button onClick={onStartingTimeChange(25)}>Pomodoro</button>
      <button onClick={onStartingTimeChange(5)}>Short Break</button>
      <button onClick={onStartingTimeChange(15)}>Long Break</button>
    </div>
  );
}

export default TimerControls;
