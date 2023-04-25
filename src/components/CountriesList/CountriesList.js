import "./CountriesList.css"
import CountryCard from "../CountryCard/CountryCard";

const CountriesList = ({countries}) => {

    return  <div className="country-card-container">
                {
                    countries.map((country) => {
                        console.log(country)
                        return <CountryCard country={country}/>
                    })
                }
            </div> 
}

export default CountriesList;