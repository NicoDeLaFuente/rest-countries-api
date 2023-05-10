import { Link } from "react-router-dom"

const BorderButton = ({border, borderCountryHandler}) => {

    

    return <Link   /* to= {`/detail/${border}`} */  onClick={borderCountryHandler} className="btn-border btn" id={border}>{border}</Link>
}

export default BorderButton