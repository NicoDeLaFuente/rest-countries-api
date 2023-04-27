import "./MainContainer.css";
import CountriesList from "../CountriesList/CountriesList";
import SearchInput from "../SearchInput/SearchInput";
import FilterInput from "../FilterInput/FilterInput";
import { useEffect, useState } from "react";

const MainContainer = () => {
    const [countries, setCountries] = useState([])



    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [countries])

    return  <main>
                <div className="search-and-filter" id="search-and-filter">
                    <SearchInput/>
                    <FilterInput/>
                </div>
                <CountriesList countries={countries}/>
            </main>
}

export default MainContainer