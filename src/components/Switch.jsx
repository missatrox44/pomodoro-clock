// import { useState } from "react";

export default function Switch({ developerMode, setDeveloperMode }) {
    // const [checked, setChecked] = useState(false);
    return (
        <div className="switch-container">
            <input 
                type="checkbox" 
                id="toggle" 
                class="checkbox" 
                // checked={checked}
                onChange={ () => setDeveloperMode(!developerMode) }/>
            <label for="toggle" class="switch"></label>
        </div>
    )
}