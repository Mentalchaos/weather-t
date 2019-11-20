import React from 'react';
import WeatherLocation from './index.js';
import './appContainer.css';

const LocationList = () => {
    const cities = ['Santiago,CL','Tokyo,JP','Helsinki,FI','Vienna,AT','Berlin,DE'];
    return (
        <div className="AppContainer">
            { cities.map((city,key) => <WeatherLocation city={city} key={key} />)}
        </div>
    )
};

export default LocationList;