import "./CountryDetailContainer.css";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import CountryDetail from "../CountryDetail/CountryDetail";

const CountryDetailContainer = () => {

    const { isDark } = useContext(ThemeContext)

    const { country, borderCountry } = useParams()

    const [detail, setDetail] = useState()

    useEffect(() => {
        const fetchCountry = fetch(`https://restcountries.com/v3.1/all`)
                            .then(res => res.json())
        if(country || borderCountry) {
            const newCountry = country.replaceAll("-", " ")
            fetchCountry.then(data => setDetail(data.filter(data => data.name.common.toLowerCase() === newCountry)))
        }
    }, [country, borderCountry])
    return <>
        {detail === undefined ? <p>Loading</p> : <CountryDetail borderCountry={borderCountry} detail={detail} isDark={isDark} />}
    </>
}

export default CountryDetailContainer;