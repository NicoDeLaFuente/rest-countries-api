import "./MainContainer.css";
import CountriesList from "../CountriesList/CountriesList";
import SearchInput from "../SearchInput/SearchInput";
import FilterInput from "../FilterInput/FilterInput";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MainContainer = () => {

    const {region} = useParams();
    const [countries, setCountries] = useState([])

    useEffect(() => {

        const fetchCountries = fetch(`https://restcountries.com/v3.1/all`)
                      .then(res => res.json())
        
        if (region) {
            fetchCountries.then(data => setCountries(data.filter(data => data.region.toLowerCase() === region)))
        } else {
            fetchCountries.then(data => setCountries(data))
        }
    }, [countries, region])


    return  <main>
                <div className="search-and-filter" id="search-and-filter">
                    <SearchInput/>
                    <FilterInput/>
                </div>
                <CountriesList countries={countries}/>
            </main>
}

export default MainContainer