import React from 'react';
import WeatherLocation from './index.js';
import './appContainer.css';

const LocationList = ({ cities, handleSelectedLocation }) => {
    return (
        <div className="AppContainer">
            { cities.map((city,key) => 
                <WeatherLocation 
                    handleSelectedLocation={ () => handleSelectedLocation(city) } 
                    city={city} 
                    key={key} 
                />)
            }
        </div>
    )
};

export default LocationList;