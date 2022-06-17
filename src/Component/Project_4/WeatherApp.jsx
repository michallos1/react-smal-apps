import { useEffect, useState } from "react";
import "./weatherCss.css"
import Info from "./Info";

const api = {
    
    url: "https://api.openweathermap.org/data/2.5/"
}
export default function WeatherApp () {
    const [query, setQuery] = useState('');
    const [pogoda, setPogoda] = useState([]);

    // useEffect(setQuery('Lublin'))

    const search = city => {
        if (city.key === "Enter"){
            fetch(`${api.url}weather?q=${query}&units=metric&appid=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setPogoda(result);
                setQuery('');
                console.log(result);
            });
        }
    }    

    return(
        <div className="bg-color">
            <div className="weather-app">
                <div className="weather-app-name">Weather</div>
                <div className="search-bar">
                    <input 
                        type="text"
                        className="search-input"
                        placeholder="Search. . ."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                    />
                </div>
                {(typeof pogoda.main != 'undefined') ? (
                    <div className="weather-info">
                    <div className="city-name"> {pogoda.name} </div>
                    <div className="temperature"> Temperature: {pogoda.main.temp} &deg;C </div>
                    <div className="hpa"> Pressure: {pogoda.main.pressure}</div>
                    </div>
                ) : (
                    <div>???</div>
                )}
            </div>
        </div>
    );
}

