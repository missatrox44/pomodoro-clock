import React from 'react'

function Task({ taskName }) {
  return (
    <div className='task-list-item'>
    <span>{taskName}</span>
    <span>0/1</span>
    <span class="material-icons">menu_open</span>
  </div>
  )
}

export default Task

