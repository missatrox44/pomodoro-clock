import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function TopMenu(){
  //TODO
  return(
    <nav className='top-menu'>
      <span>Pomodoro Timer</span>
      <button>Report</button>
      <button>Setting</button>
      <button>Login</button>
    </nav>
  )
}
function ControlArea(){
  return(
    <div className='ControlArea'>
      <ControlMenu />
      <Clock time={'25:00'}/>
      <button className='start-button'>START</button>
    </div>
  )
  //TODO
}
function ControlMenu(){
  return (
    <div className='ControlMenu'>
      <button>Pomodoro</button>
      <button>Short Break</button>
      <button>Long Break</button>
    </div>
  )
  //TODO
}
function Clock({time}){
  return(
    <span className='clock-readout'>{time}</span>
  )
  //TODO
}
function TaskArea() {
  //TODO
  return(
    <>
      <button className="add-task">Add Task</button>
      <TasksList />
    </>
  )
}

function TasksList() {
  //TODO
  return (
    <div className='task-list'>
    <TaskListItem name="Stuff." />
    <TaskListItem name="More stuff." />
    <TaskListItem name="Even more stuff." />
    </div>
  )
}
function TaskListItem({name}){
  return (
    <div className='task-list-item'>
      <span>{name}</span>
      <span>0/1</span>
    </div>
  )
}
function PomodoroCreationMenu(){
  //TODO
  return(
    <div className='pomodoro-creation-menu'>
      <input>What are you working on?</input>
      <span>Est Pomodoros</span>
      <span>1</span>
      <button>+1</button><button>-1</button>
    </div>
  )
  
}

function App() {
  //TODO
  return (
    <>
      <TopMenu/>
      <ControlArea />
      <TaskArea />
    </>
    )
}
export default App;