import { useState } from "react";
import Header from "./Header";
import Pomodoro from "./Pomodoro";

export default function Wrapper() {
    const [timerMode, setTimerMode] = useState("pomodoro");
    return (
        <div className={timerMode + '-mode'}>
            <Header />
            <Pomodoro 
                timerMode={timerMode}
                setTimerMode={setTimerMode}
            />
        </div>
    )
}