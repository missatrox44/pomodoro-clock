import React from 'react'
import { useState } from 'react'

function Rounds() {
 const [roundsCompleted, setRoundsCompleted] = useState(0)

  return (
    <div className="rounds-completed">
      <span>Rounds</span>
    </div>
  )
}

export default Rounds