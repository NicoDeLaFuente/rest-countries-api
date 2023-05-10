import { useEffect } from "react"
import "./CountryDetail.css"
import BorderButton from "../BorderButton/BorderButton"
import { Link } from "react-router-dom"

const CountryDetail = ({detail, isDark, borderCountry}) => {

// manejador del click de borders
const borderCountryHandler = (e) => {
    console.log(e.currentTarget.id)
}

//Currencies 
const arrCurrencies = [];
for (const currency in detail[0].currencies){
    arrCurrencies.push(detail[0].currencies[currency].name)
    }

const currencyString = arrCurrencies.toString()

// From Languages Object to Languages String
    const arrLanguage = []
    for (const language in detail[0].languages) {
        arrLanguage.push(detail[0].languages[language])
    }
    const languages = arrLanguage.toString()
    const languagesString = languages.replaceAll(",", ", ")

// Correct Format of Top Level Domain
    const tlds = detail[0].tld
    let newTld;
    tlds.map(tld => {
        newTld = tld.slice(1).charAt(0).toUpperCase().concat(tld.slice(2))
        return newTld
    })


    useEffect(() => {
        const countryDetails = document.querySelector("#country-details")
        const bntBorder = document.querySelectorAll(".btn-border")
        const paragraph = document.querySelectorAll(".details-info > div > p")
        const span = document.querySelectorAll(".details-info > div > span")
        const btnBack = document.querySelector("#btn-back")

        if (isDark) {
            countryDetails.classList.add("is-dark")
            btnBack.classList.add("is-elem-dark")
            bntBorder.forEach(btn => {
                btn.classList.add("is-elem-dark")
            })
            paragraph.forEach(p => {
                p.classList.add("text-dark")
            })
            span.forEach(s => {
                s.classList.add("text-dark")
            })
        } else {
            countryDetails.classList.remove("is-dark")
            btnBack.classList.remove("is-elem-dark")
            bntBorder.forEach(btn => {
                btn.classList.remove("is-elem-dark")
            })
            paragraph.forEach(p => {
                p.classList.remove("text-dark")
            })
            span.forEach(s => {
                s.classList.remove("text-dark")
            })
        }
},[isDark])

const populationDots = () => {
    const population = parseInt(detail[0].population)
    return population.toLocaleString("en-US")
}

    return <div className="country-details" id="country-details">
    <Link to="/"className="btn btn-back" id="btn-back">
        <i className="bi bi-arrow-left"></i>
        <p>Back</p>
    </Link>
    <div className="details-and-img">
        <img src={detail[0].flags.png} alt="" />
        <div className="details">
            <h1>{detail[0].name.common}</h1>
            <div className="sub-details">
                <div className="details-info">
                    <div>
                        <p>Native Name:</p>
                        <span>{detail[0].name.common}</span>
                    </div>
                    <div>
                        <p>Population:</p>
                        <span>{populationDots()}</span>
                    </div>
                    <div>
                        <p>Region:</p>
                        <span>{detail[0].region}</span>
                    </div>
                    <div>
                        <p>Sub-region:</p>
                        <span>{detail[0].subregion}</span>
                    </div>
                    <div>
                        <p>Capital:</p>
                        <span>{detail[0].capital}</span>
                    </div>

                </div>
                <div className="details-info">
                    <div>
                        <p>Top Level Domain:</p>
                        <span>
                            {newTld ? newTld : <p>No exists</p>}
                        </span>
                    </div>
                    <div>
                        <p>Currencies:</p>
                        <span>{currencyString}</span>
                    </div>
                    <div>
                        <p>Languages:</p>
                        <span>
                            {languagesString}
                        </span>
                    </div>
                </div>
            </div>
            <div className="details-info buttons-details">
                <h2>Border Countries</h2>
                <div>
                    { detail[0].borders ? detail[0].borders.map(border => {
                        return <BorderButton border={border} borderCountryHandler={borderCountryHandler} key={border}/>
                    }): <p>Not have any</p>}
                </div>
            </div>
        </div>

    </div>
</div>
}

export default CountryDetail;