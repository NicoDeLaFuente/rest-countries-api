import "./Title.css";
import LightDarkButton from "../LightDarkButton/LightDarkButton";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const Title = () => {

    const {isDark} = useContext(ThemeContext)
    useEffect(() => {
        const title = document.querySelector("#title")
        if (isDark) {
            title.classList.add("is-dark-elem")
        } else {
            title.classList.remove("is-dark-elem")
        }
        
        
    }, [isDark])
    return  <header className="title" id="title">
                <h1>Where in the world?</h1>
                <LightDarkButton/>
            </header>
}

export default Title;