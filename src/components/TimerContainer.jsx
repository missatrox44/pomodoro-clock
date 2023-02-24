import React from 'react';
import TimerControls from './TimerControls';
import Clock from './Clock';

function TimerContainer() {
  return (
    <div className='TimerContainer'>
    <TimerControls />
    <Clock time={'25:00'}/>
    <div>
      <button className='start-button'>START</button>
    </div>
  </div>
  )
}

export default TimerContainer

