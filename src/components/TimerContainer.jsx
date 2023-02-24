import React from 'react';
import { useState, useEffect } from 'react';
import TimerControls from './TimerControls';
import Rounds from './Rounds';

const click = new Audio('./public/click.m4a');

function TimerContainer() {
  const [timeLeft, setTimeLeft] = useState(25*60);
  const [timerRunning, setTimerRunning] = useState(false);
  useEffect(() => {
      let timer;
      if (timerRunning){
        timer = setInterval(() => {
          setTimeLeft(timeLeft => timeLeft - 1);
        }, 1000)
      }
      return () => {clearInterval(timer)}
  }, [timerRunning]);

  function countdownHandler () {
    click.play();
    if (timerRunning){
      setTimerRunning(false);
    } else {
      setTimerRunning(true);
    }
  }
  
  function resetTimer(minutes){
    setTimerRunning(false);
    const seconds = minutes * 60;
    setTimeLeft(seconds);
  }

  function onStartingTimeChange(minutes) {
    if (timerRunning){
      let text = "Are you sure? You will lose your current timer.";
      if (confirm(text) == true) {
        resetTimer(minutes);
      } } else {
        resetTimer(minutes);
      }
  }
  
function formatTime(timeLeft) {
const minutes = Math.floor(timeLeft/60);
const seconds = ((timeLeft%60).toString()).padEnd(2,0);
  return `${minutes}:${seconds}`;
}

  return (
    <div className='TimerContainer'>
    <div className="ControlMenu">
      <button onClick={() => onStartingTimeChange(25)}>Pomodoro</button>
      <button onClick={() => onStartingTimeChange(5)}>Short Break</button>
      <button onClick={() => onStartingTimeChange(15)}>Long Break</button>
    </div>
    <span className='clock-readout'>{ (formatTime(timeLeft)).padStart(2,'0') }</span>
    <div>
      <button className='start-button' onClick={() => countdownHandler()}>{timerRunning ? 'PAUSE' : 'START'}</button>
  
    </div>
    <Rounds/>
  </div>
  )
}

export default TimerContainer