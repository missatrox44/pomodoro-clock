import { useState } from "react";
import TimerContainer from "./TimerContainer";
import TaskContainer from "./TaskContainer";

export default function Pomodoro(prop: { timerMode:string, setTimerMode:Function }){
    
    const [roundsCompleted, setRoundsCompleted] = useState(0);

    return (
    <div className='pomodoro'>
        <TimerContainer 
            setRoundsCompleted={setRoundsCompleted} 
            roundsCompleted={roundsCompleted}
            timerMode={prop.timerMode}
            setTimerMode={prop.setTimerMode}
        />
        <TaskContainer roundsCompleted={roundsCompleted}/>
    </div>
    )
}

