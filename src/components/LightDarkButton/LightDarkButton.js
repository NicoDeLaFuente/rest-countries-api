import "./LightDarkButton.css";
import { useState, useEffect } from "react";

const LightDarkButton = () => {

    const [changeMode, setChangeMode] = useState(false)

    useEffect(() => {
        const icon = document.querySelector(".light-dark-button i")
        const text = document.querySelector(".light-dark-button p")
        if(changeMode) {
            icon.classList.replace("bi-moon", "bi-moon-fill")
            text.textContent = "Light Mode"
        } else {
            icon.classList.replace("bi-moon-fill", "bi-moon")
            text.textContent = "Dark Mode"
        }

        
        
        
    }, [changeMode])

    const clickHandlerDarkLightMode = () => {
        setChangeMode(!changeMode)
    }

    return <button onClick={clickHandlerDarkLightMode} id="light-dark-button" className="light-dark-button">
        <i className="bi bi-moon"></i><p>Dark Mode</p>
    </button>
}

export default LightDarkButton;