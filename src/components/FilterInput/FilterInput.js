import "./FilterInput.css"
import { useContext, useEffect, useState} from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { Link } from "react-router-dom";

const FilterInput = () => {

    const [filter, setFilter] = useState("")
    const [menuFilter, setMenuFilter] = useState(false)

    const {isDark} = useContext(ThemeContext)

    useEffect(() => {
        const filterTitle = document.querySelector("#filter-title")
        const filterTitleTxt = document.querySelector("#filter-title p")
        const FilterTitleIcon = document.querySelector("#filter-title i")
        const filterOptions = document.querySelector("#filter-options")
        const menuOptions = document.querySelector("#menu-options");
        
        if (isDark) {
            filterTitle.classList.add("is-dark-elem")
            filterTitleTxt.classList.add("is-dark-elem")
            filterOptions.classList.add("is-dark-elem")
            FilterTitleIcon.classList.add("is-dark-elem")
        } else {

            filterTitleTxt.classList.remove("is-dark-elem")
            filterOptions.classList.remove("is-dark-elem")
            filterTitle.classList.remove("is-dark-elem")
        }

        if(menuFilter) {
            menuOptions.classList.remove("disabled")
        } else{
            menuOptions.classList.add("disabled")
        }

        if (filter !== "" && filter !== "All") {
            filterTitleTxt.textContent = filter
        } else {
            filterTitleTxt.textContent = "Filter by Region"
        }
        
        
    }, [isDark, menuFilter, filter])

    const clickFilterHandler = (e) => {
        setMenuFilter(!menuFilter)
    }

    const filterChoosen = (e) => {
        const string = e.currentTarget.id
        const firstUpper = string.charAt(0).toUpperCase()
        const stringUpper = string.replace(string[0], firstUpper)
        setFilter(stringUpper)
    }

    return <div className='dropdown' id="filter">
        <div className='filter-title' id="filter-title" onClick={clickFilterHandler}>
            <p>Filter by Region</p>
            <i className="bi bi-chevron-compact-down"></i>
        </div>
        <div className="menu-options disabled" id="menu-options">
            <ul className='options' id="filter-options">
                <li className='option' id='all' onClick={filterChoosen}><Link to="/" className="link">All</Link></li>
                <li className='option' id='africa' onClick={filterChoosen}><Link to="/africa" className="link">Africa</Link></li>
                <li className='option' id='america' onClick={filterChoosen}><Link to="/americas" className="link">America</Link></li>
                <li className='option' id='asia' onClick={filterChoosen}><Link to="/asia" className="link">Asia</Link></li>
                <li className='option' id='europe' onClick={filterChoosen}><Link to="/europe" className="link">Europe</Link></li>
                <li className='option' id='oceania' onClick={filterChoosen}><Link to="/oceania" className="link">Oceania</Link></li>
            </ul>
        </div>
    </div>
}

export default FilterInput;