import "./CountryCard.css"

const CountryCard = ({country}) => {

    return  <div className="card">
                <img src={country.flags.png} alt={`${country.name.common} flag`}/>
                <div className="info-container">
                    <h2>{country.name.common} </h2>
                    <div className="info">
                        <p>Population: 
                            <span> {country.population}</span>
                        </p>
                        <p>Region:
                            <span> {country.continents}</span>
                        </p>
                        <p>Capital: 
                            <span> {country.capital}</span>
                        </p>
                    </div>
                </div>
            </div>
}

export default CountryCard;