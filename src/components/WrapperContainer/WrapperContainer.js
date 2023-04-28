import "./WrapperContainer.css"
import Title from "../Title/Title";
import MainContainer from "../MainContainer/MainContainer";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CountryDetailContainer from "../CountryDetailContainer/CountryDetailContainer";


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
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<MainContainer/>}/>
                        <Route exact path="/:region" element={<MainContainer/>}/>
                        <Route exact path="/detail/:country" element={<CountryDetailContainer/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
}

export default WrapperContainer;