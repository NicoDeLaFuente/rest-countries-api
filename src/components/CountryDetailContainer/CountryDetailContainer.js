import "./CountryDetailContainer.css";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { useContext, useEffect } from "react";

const CountryDetailContainer = () => {

    const {isDark} = useContext(ThemeContext)


    useEffect(() => {
        const btns = document.querySelectorAll(".btn");
        const countryDetails = document.querySelector("#country-details")
        
            if(isDark) {
                countryDetails.classList.add("is-dark")
            } else {
                countryDetails.classList.remove("is-dark")
            }
        }, [isDark])

    return  <div className="country-details" id="country-details">
                <button className="btn btn-back">
                    <i class="bi bi-arrow-left"></i>
                    <p>Back</p>
                </button>
                <div className="details-and-img">
                    <img src="https://flagcdn.com/w320/bb.png" alt="" />
                    <div className="details">
                        <h1>Belgium</h1>
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