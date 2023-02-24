import React from 'react'

function Task({ taskName }) {
  return (
    <div className='task-list-item'>
    <span>{taskName}</span>
    <span>0/1</span>
    <img className="menu-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwUlEQVR4nO3ZQQ6CMBSE4X8jnMF6Q6zeUoREDVcxuNc0KUuF7qZmvuTt2EwetJkAZlVpgRMwAK88VyACDZU4ABPw/jIPIFDBJqYfIZa5q2/mvCHEMkeEjQVB0jcjay4Ikp79iyBPhA0FQXqExYIgHcKafE+shbgBO8SFlTApxJ5KNPme6PMBkOaSXyf5TZjZdu4jKtxH1IzuI2Jm9xEx0X1EUHAfMbPqtP4/IsJ9RM3oPiJmdh8RE91HBAX3ETPkfADfe0+kCAYLvQAAAABJRU5ErkJggg=="/>
  </div>
  )
}

export default Task

