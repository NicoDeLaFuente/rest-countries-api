import "./WrapperContainer.css"
import Title from "../Title/Title";
import MainContainer from "../MainContainer/MainContainer";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";


const WrapperContainer = () => {

    const {isDark} = useContext(ThemeContext)
    useEffect(() => {
        const wrapper = document.querySelector("#wrapper")
        if (isDark) {
            wrapper.classList.add("is-dark")
        } else {
            wrapper.classList.remove("is-dark")
        }
        
        
    }, [isDark])


    return  <div className="wrapper" id="wrapper">
                <Title/>
                <MainContainer/>
            </div>
}

export default WrapperContainer;