import React from "react";
import { useState, useEffect } from "react";
import Rounds from "./Rounds";
import Switch from "./Switch";

const click = new Audio("./click.ogg");
const ding = new Audio("./ding.ogg");

enum mode {
  pomodoro = 25,
  longBreak = 15,
  shortBreak = 5,
}

function TimerContainer(prop: { setRoundsCompleted:Function, roundsCompleted:number, timerMode:string, setTimerMode:Function }) {
  const [secondsLeft, setsecondsLeft] = useState(modeToMinutes(prop.timerMode) * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  const [developerMode, setDeveloperMode] = useState(false);

  function modeToMinutes(timerMode:string):number {
    if (timerMode === "longBreak") {
      return mode.longBreak;
    }
    if (timerMode === "shortBreak") {
      return mode.shortBreak;
    }
    return mode.pomodoro;
  }
  

  useEffect(() => {
    let timer:Timer;
    if (timerRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setsecondsLeft((secondsLeft) => secondsLeft - 1);
        finishTimer(modeToMinutes(prop.timerMode));
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
      resetTimer(modeToMinutes(prop.timerMode));
      setTimerRunning(false);
      setTimerPaused(false);
      console.log(prop.timerMode);
      if (prop.timerMode === "pomodoro") {
        prop.setRoundsCompleted(prop.roundsCompleted + 1);
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

  function resetTimer(minutes: number) {
    setTimerRunning(false);
    const seconds = minutes * 60;
    setsecondsLeft(seconds);
  }

  function onStartingTimeChange(mode: string) {
    prop.setTimerMode(mode);
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

  function formatTime(secondsLeft:number) {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = (secondsLeft % 60).toString().padStart(2, '0');
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
          className={prop.timerMode === "pomodoro" ? "mode" : ""}
        >
          Pomodoro
        </button>
        <button
          onClick={() => onStartingTimeChange("shortBreak")}
          className={prop.timerMode === "shortBreak" ? "mode" : ""}
        >
          Short Break
        </button>
        <button
          onClick={() => onStartingTimeChange("longBreak")}
          className={prop.timerMode === "longBreak" ? "mode" : ""}
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
      <Rounds roundsCompleted={prop.roundsCompleted} />
    </div>
  );
}

export default TimerContainer;
