import React from 'react';
import { useState } from 'react';

function Modal() {
  const [roundsEstimated, setRoundsEstimated] = useState(1)
  
  return (
    <div className='pomodoro-creation-menu'>
    {/* <input type='text'>What are you working on?</input> */}
    <span>Est Pomodoros</span>
    <span>1</span>
    <button>+1</button><button>-1</button>
  </div>
  )
}

export default Modal

