import { React, useState } from "react";
import TimerContainer from "./TimerContainer";
import TaskContainer from "./TaskContainer";

export default function Pomodoro(){
    
    const [roundsCompleted, setRoundsCompleted] = useState(0);

    return (
    <>
        <TimerContainer setRoundsCompleted={setRoundsCompleted} roundsCompleted={roundsCompleted}/>
        
        <TaskContainer roundsCompleted={roundsCompleted}/>
    </>
    )
}

