import "./CountryDetailContainer.css";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { useContext, useEffect } from "react";

const CountryDetailContainer = () => {

    const { isDark } = useContext(ThemeContext)


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
    }, [isDark])

    return <div className="country-details" id="country-details">
        <button className="btn btn-back" id="btn-back">
            <i className="bi bi-arrow-left"></i>
            <p>Back</p>
        </button>
        <div className="details-and-img">
            <img src="https://flagcdn.com/w320/bb.png" alt="" />
            <div className="details">
                <h1>Belgium</h1>
                <div className="sub-details">
                    <div className="details-info">
                        <div>
                            <p>Native Name:</p>
                            <span>Belgie</span>
                        </div>
                        <div>
                            <p>Population:</p>
                            <span>12223421</span>
                        </div>
                        <div>
                            <p>Region:</p>
                            <span>Europe</span>
                        </div>
                        <div>
                            <p>Sub-region:</p>
                            <span>Western-europe</span>
                        </div>
                        <div>
                            <p>Capital:</p>
                            <span>Brussels</span>
                        </div>

                    </div>
                    <div className="details-info">
                        <div>
                            <p>Top Level Domain:</p>
                            <span>Be</span>
                        </div>
                        <div>
                            <p>Currencies:</p>
                            <span>Euro</span>
                        </div>
                        <div>
                            <p>Languages</p>
                            <span>Dutch, French, German</span>
                        </div>
                    </div>
                </div>
                <div className="details-info buttons-details">
                    <h2>Border Countries</h2>
                    <div>
                        <button className="btn-border btn">France</button>
                        <button className="btn-border btn">Germany</button>
                        <button className="btn-border btn">Netherlands</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default CountryDetailContainer;