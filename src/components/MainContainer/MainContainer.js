import "./MainContainer.css";
import CountriesList from "../CountriesList/CountriesList";
import SearchInput from "../SearchInput/SearchInput";
import FilterInput from "../FilterInput/FilterInput";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MainContainer = () => {

    const {region} = useParams();

    //States
    const [countries, setCountries] = useState([])
    const [textSearch, setTextSearch] = useState("")

    // Fetching data
    const fetchCountries = () => {
        const fetching = fetch(`https://restcountries.com/v3.1/all`)
        fetching.then( res => res.json())
                .then (data => setCountries(data))
    }


    let showCountries = []
    if(textSearch) {
       showCountries = countries.filter(country => country.name.common.toLowerCase().includes(textSearch))
    } else if (region) {
        showCountries = countries.filter(country => country.region.toLowerCase() === region)
    }else {
        showCountries = countries
    }


    useEffect(() => {
        fetchCountries()
    }, [])


    return  <main>
                <div className="search-and-filter" id="search-and-filter">
                    <SearchInput setTextSearch={setTextSearch}/>
                    <FilterInput/>
                </div>
                <CountriesList showCountries={showCountries}/>
            </main>
}

export default MainContainer