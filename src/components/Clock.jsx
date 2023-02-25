import React from 'react'

function Clock({ time }) {


  return (
    // <span className='clock-readout'>{time}</span>
    <input
      id="timer"
      type="time"
      name="timer"
      min="01:00"
      max="25:00"
      required
      pattern="[0-9]{2}:[0-9]{2}" />
  )
}

export default Clock

