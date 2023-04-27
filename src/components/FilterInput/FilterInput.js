import "./FilterInput.css"
import { useContext, useEffect} from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const FilterInput = () => {

    const {isDark} = useContext(ThemeContext)
    useEffect(() => {
        const filter = document.querySelector("#filter")
        const filterTitle = document.querySelector("#filter-title")
        const filterOptions = document.querySelector("#filter-options")
        if (isDark) {
            filter.classList.add("is-dark-elem")
            filterTitle.classList.add("is-dark-elem")
            filterOptions.classList.add("is-dark-elem")
        } else {
            filter.classList.remove("is-dark-elem")
            filterTitle.classList.remove("is-dark-elem")
            filterOptions.classList.remove("is-dark-elem")
        }
        
        
    }, [isDark])

    return <div class='dropdown' id="filter">
        <div class='filter-title' id="filter-title">Filter by Region <i class="bi bi-chevron-compact-down"></i></div>
        <div className="menu-options disabled" id="menu-options">
            <div class='options' id="filter-options">
                <div class='option' id='africa'>Africa</div>
                <div class='option' id='america'>America</div>
                <div class='option' id='asia'>Asia</div>
                <div class='option' id='europe'>Europe</div>
                <div class='option' id='Oceania'>Oceania</div>
            </div>
        </div>
    </div>
}

export default FilterInput;