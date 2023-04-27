
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import "./LightDarkButton.css";
import { useEffect, useContext } from "react";

const LightDarkButton = () => {

    const {clickHandlerThemeMode, isDark} = useContext(ThemeContext)

    useEffect(() => {
        const icon = document.querySelector(".light-dark-button i")
        const text = document.querySelector(".light-dark-button p")
        if(isDark) {
            icon.classList.replace("bi-moon", "bi-moon-fill")
            text.textContent = "Light Mode"
            icon.classList.add("is-dark-elem", "dark-theme-text")
            text.classList.add("is-dark-elem", "dark-theme-text")
        } else {
            icon.classList.replace("bi-moon-fill", "bi-moon")
            text.textContent = "Dark Mode"
            icon.classList.remove("is-dark-elem", "dark-theme-text")
            text.classList.remove("is-dark-elem", "dark-theme-text")
        }
    }, [isDark])

    
    return <button onClick={clickHandlerThemeMode} id="light-dark-button" className="light-dark-button">
        <i className="bi bi-moon button-color-bg"></i><p className="button-color-bg">Dark Mode</p>
    </button>
}

export default LightDarkButton;