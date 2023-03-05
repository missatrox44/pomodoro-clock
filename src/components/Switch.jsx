// import { useState } from "react";

export default function Switch({ developerMode, setDeveloperMode }) {
    // const [checked, setChecked] = useState(false);
    return (
        <div className="switch-container">
            <input 
                type="checkbox" 
                id="toggle" 
                className="checkbox" 
                // checked={checked}
                onChange={ () => setDeveloperMode(!developerMode) }/>
            <label htmlFor="toggle" className="switch"></label>
        </div>
    )
}