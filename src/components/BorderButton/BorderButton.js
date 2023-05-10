import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const BorderButton = ({border, borderCountryHandler}) => {

    /* const {border} = useParams()
 */
    const [countries, setCountries] = useState()
    

    const fetchingData = fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    

    return <Link   /* to= {`/detail/${border}`} */  onClick={borderCountryHandler} className="btn-border btn" id={border}>{border}</Link>
}

export default BorderButton