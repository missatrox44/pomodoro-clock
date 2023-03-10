import React from "react";
import { useState, useEffect } from "react";
import Rounds from "./Rounds";
import Switch from "./Switch";

const click = new Audio("./click.ogg");
const ding = new Audio("./ding.ogg");

function TimerContainer({ setRoundsCompleted, roundsCompleted, timerMode, setTimerMode }) {
  // const [timerMode, setTimerMode] = useState("pomodoro");
  const [secondsLeft, setsecondsLeft] = useState(modeToMinutes(timerMode) * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  const [developerMode, setDeveloperMode] = useState(false);

  // I'd prefer to use enums but they don't exist in javascript. If we decide to go full typescript in the future though, we can have nicer things :). https://www.typescriptlang.org/docs/handbook/enums.html
  function modeToMinutes(mode) {
    if (mode === "pomodoro") {
      return 25;
    }
    if (mode === "longBreak") {
      return 15;
    }
    if (mode === "shortBreak") {
      return 5;
    }
    return null;
  }

  useEffect(() => {
    let timer;
    if (timerRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setsecondsLeft((secondsLeft) => secondsLeft - 1);
        finishTimer(modeToMinutes(timerMode));
      }, developerMode ? 1 : 1000);
    }
    return () => {
      clearInterval(timer);
    };
  }, [timerRunning, secondsLeft, developerMode]);

  function finishTimer(minutes = 25) {
    if (secondsLeft === 1) {
      console.log("Ding!");
      ding.play();
      resetTimer(modeToMinutes(timerMode));
      setTimerRunning(false);
      setTimerPaused(false);
      console.log(timerMode);
      if (timerMode === "pomodoro") {
        setRoundsCompleted(roundsCompleted + 1);
      }
    }
  }

  function countdownHandler() {
    // play button clicked
    click.play();
    if (timerRunning) {
      // pause the timer
      setTimerRunning(false);
      setTimerPaused(true);
    } else {
      // start the timer
      setTimerRunning(true);
      setTimerPaused(false);
    }
  }

  function resetTimer(minutes) {
    setTimerRunning(false);
    const seconds = minutes * 60;
    setsecondsLeft(seconds);
  }

  function onStartingTimeChange(mode) {
    setTimerMode(mode);
    const minutes = modeToMinutes(mode);
    if (timerRunning || timerPaused) {
      let text = "Are you sure? You will lose your current timer.";
      if (confirm(text) == true) {
        resetTimer(minutes);
        setTimerRunning(false);
        setTimerPaused(false);
      }
    } else {
      resetTimer(minutes);
      setTimerRunning(false);
      setTimerPaused(false);
    }
  }

  function formatTime(secondsLeft) {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = (secondsLeft % 60).toString().padStart(2, 0);
    return `${minutes}:${seconds}`;
  }

  const checkHandler = () => {
    setDeveloperMode(!developerMode);
}

  return (
    <div className="TimerContainer">
      <Switch developerMode={developerMode} setDeveloperMode={setDeveloperMode}/>
      <div className="ControlMenu">
        <button
          onClick={() => onStartingTimeChange("pomodoro")}
          className={timerMode === "pomodoro" ? "mode" : ""}
        >
          Pomodoro
        </button>
        <button
          onClick={() => onStartingTimeChange("shortBreak")}
          className={timerMode === "shortBreak" ? "mode" : ""}
        >
          Short Break
        </button>
        <button
          onClick={() => onStartingTimeChange("longBreak")}
          className={timerMode === "longBreak" ? "mode" : ""}
        >
          Long Break
        </button>
      </div>
      <span className="clock-readout">
        {formatTime(secondsLeft).padStart(2, "0")}
      </span>
      <div>
        <button className="start-button" onClick={() => countdownHandler()}>
          {timerRunning ? (
            <span className="material-icons icons">pause</span>
          ) : (
            <span className="material-icons icons">play_arrow</span>
          )}
        </button>
      </div>
      <Rounds roundsCompleted={roundsCompleted} />
    </div>
  );
}

export default TimerContainer;
