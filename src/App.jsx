import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Header from './components/Header'
import TimerContainer from './components/TimerContainer';
import TaskContainer from './components/TaskContainer';
import Modal from './components/Modal';





function App() {
  //TODO
  return (
    <>
      <Header />
        <TimerContainer />
      <TaskContainer /> 
      <Modal /> 
    </>
    )
}
export default App;