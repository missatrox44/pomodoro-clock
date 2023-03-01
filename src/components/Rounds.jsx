import React from 'react'

function Rounds({ roundsCompleted }) {
 // const [roundsCompleted, setRoundsCompleted] = useState(0)

  return (
    <div className="rounds-completed">
      <span>Rounds Completed: { roundsCompleted }</span>
    </div>
  )
}

export default Rounds