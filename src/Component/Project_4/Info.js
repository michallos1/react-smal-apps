import React from 'react';

const Info = ({data}) => (
    <div className="weather-info">
    <div className="city-name"> {data.name} </div>
    <div className="temperature"> Temperature: {data.main.temp} &deg;C </div>
    <div className="hpa"> Pressure: {data.main.pressure}</div>
    </div>
)

export default Info;