import React from 'react'
import Task from './Task'
import { useState } from 'react'
import Modal from './Modal'

function TaskContainer() {
  const [isHideModal, setIsHideModal] = useState(true);

  // setter function 
  return (
    <>
    <Task />
    <button className="add-task">Add Task</button>
    <Modal className={`${isHideModal ? 'hidden' : ''}`}/>
  </>
  )
}

export default TaskContainer

