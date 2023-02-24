import React from 'react';
import { useState, useEffect } from 'react';
import TimerControls from './TimerControls';
import Rounds from './Rounds';


function TimerContainer() {
  const [timeLeft, setTimeLeft] = useState(25*60);
  const [timerRunning, setTimerRunning] = useState(false);
  useEffect(() => {
      let timer;
      if (timerRunning){
        timer = setInterval(() => {
          setTimeLeft(timeLeft => timeLeft - 1);
        }, 1000)
        console.log("Here we go!");
      }
      return () => {clearInterval(timer)}
  }, [timerRunning]);


  function countdownHandler () {
    setTimerRunning(true);
  }
  
  function onStartingTimeChange(seconds) {
    setTimerRunning(false);
    setTimeLeft(seconds);
  }
  
  return (
    <div className='TimerContainer'>
    <div className="ControlMenu">
      <button onClick={() => onStartingTimeChange(25)}>Pomodoro</button>
      <button onClick={() => onStartingTimeChange(5)}>Short Break</button>
      <button onClick={() => onStartingTimeChange(15)}>Long Break</button>
    </div>
    <span className='clock-readout'>{ `${Math.ceil(timeLeft/60)}:${timeLeft%60}` }</span>
    <div>
      <button className='start-button' onClick={() => countdownHandler()}>START</button>
  
    </div>
    <Rounds/>
  </div>
  )
}

export default TimerContainer

