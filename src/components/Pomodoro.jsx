import { React, useState } from "react";
import TimerContainer from "./TimerContainer";
import TaskContainer from "./TaskContainer";

export default function Pomodoro({ timerMode, setTimerMode }){
    
    const [roundsCompleted, setRoundsCompleted] = useState(0);

    return (
    <div className='pomodoro'>
        <TimerContainer 
            setRoundsCompleted={setRoundsCompleted} 
            roundsCompleted={roundsCompleted}
            timerMode={timerMode}
            setTimerMode={setTimerMode}
        />
        <TaskContainer roundsCompleted={roundsCompleted}/>
    </div>
    )
}

