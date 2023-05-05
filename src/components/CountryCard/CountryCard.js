import "./CountryCard.css"
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { Link } from "react-router-dom";

const CountryCard = ({country}) => {

    const {isDark} = useContext(ThemeContext)

    useEffect(() => {
        const cards = document.querySelectorAll(".card")

        cards.forEach(card => {
            if(isDark) {
                card.classList.add("is-dark-elem")
            } else {
                card.classList.remove("is-dark-elem")
            }
        })
        
    }, [isDark])

    //changing names format
    const name = () => {
        let nameReplaced = country.name.common.replaceAll(" ", "-").toLowerCase()
        return nameReplaced.replaceAll(",", "-")
    }
    


    //changing populations format
    const populationDots = () => {
        const population = parseInt(country.population)
        return population.toLocaleString("en-US")
    }
    



    return  <Link to={`/detail/${name()}`} className="card">
                <img src={country.flags.png} alt={`${country.name.official} flag`}/>
                <div className="info-container" id="info-container">
                    <h2>{country.name.common} </h2>
                    <div className="info">
                        <p>Population: 
                            <span> {populationDots()}</span>
                        </p>
                        <p>Region:
                            <span> {country.continents}</span>
                        </p>
                        <p>Capital: 
                            <span> {country.capital}</span>
                        </p>
                    </div>
                </div>
            </Link>
}

export default CountryCard;