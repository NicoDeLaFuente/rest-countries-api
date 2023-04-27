import "./SearchInput.css"
import { useContext, useEffect } from "react"
import { ThemeContext } from "../../context/ThemeContext/ThemeContext"

const SearchInput = () => {

    const {isDark} = useContext(ThemeContext)
    useEffect(() => {
        const iconSearch = document.querySelector("#icon-search")
        const search = document.querySelector("#search-by-country")
        const inputTxt = document.querySelector("#input-search")
        if (isDark) {
            iconSearch.classList.add("is-dark-elem")
            search.classList.add("is-dark-elem")
            inputTxt.classList.add("is-dark-elem")
        } else {
            iconSearch.classList.remove("is-dark-elem")
            search.classList.remove("is-dark-elem")
            inputTxt.classList.remove("is-dark-elem")
        }
        
        
    }, [isDark])

    return  <div className="search-by-country" id="search-by-country" >
                <i class="bi bi-search" id="icon-search"></i>
                <input type="text" placeholder="Search for a country..." className="search-country" id="input-search"></input>
            </div>
}

export default SearchInput;