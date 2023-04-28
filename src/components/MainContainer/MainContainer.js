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

        if (region) {
            fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then(res => res.json())
            .then(dataFiltered => setCountries(dataFiltered))
        } else {
            fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
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