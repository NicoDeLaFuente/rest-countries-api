import "./CountriesList.css"
import CountryCard from "../CountryCard/CountryCard";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const CountriesList = ({countries}) => {

    const {isDark} = useContext(ThemeContext)
    useEffect(() => {
        const cards = document.querySelectorAll(".card")

        cards.forEach(card => {
            if (isDark) {
                card.classList.add("is-dark-elem")
            } else {
                card.classList.remove("is-dark-elem")
            }
        })

        
    }, [isDark])

    return  <div className="country-card-container">
                {
                    countries.map((country) => {
                        return <CountryCard country={country} key={country.name.official}/>
                    })
                }
            </div> 
}

export default CountriesList;