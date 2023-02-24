import React from 'react';
import TimerControls from './TimerControls';
import Clock from './Clock';
import Rounds from './Rounds';


function TimerContainer({timeLeft}) {

  //function countdownHandler here

  return (
    <div className='TimerContainer'>
    <TimerControls />
    <Clock timeLeft={'25:00'}/>
    <div>
      <button onClick={countdownHandler} className='start-button'>START</button>
    </div>
    <Rounds/>
  </div>
  )
}

export default TimerContainer

