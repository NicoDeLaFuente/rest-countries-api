import "./BorderButtons.css"
import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import {ThemeContext} from "../../context/ThemeContext/ThemeContext"

const BorderButton = ({ border }) => {

    const { isDark } = useContext(ThemeContext)
    console.log(isDark)

    const [borderName, setBorderName] = useState('')
    useEffect(() => {
        const borderButtons = document.querySelectorAll(".btn-border")

        borderButtons.forEach(card => {
            if (isDark) {
                card.classList.add("is-dark-elem")
            } else {
                card.classList.remove("is-dark-elem")
            }
        })

        fetchName()
    })

    const fetchName = () => {
        const fetching = fetch(`https://restcountries.com/v3.1/alpha/${border}?fields=name`)
        fetching.then(res => res.json())
            .then(data => setBorderName(data?.name?.common.toLowerCase()))
    }



    return <Link to={`/detail/${borderName}`} className="btn-border btn" id={border}>{border}</Link>
}

export default BorderButton