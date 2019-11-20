import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const getWeatherIcon = weatherState => {
    let icon = 0;
    weatherState ? icon = weatherState : icon = 'day-sunny';

    return <WeatherIcons name={icon} size={'3x'} />;
};

const WeatherTemperature = ({ temperature, weatherState }) => {
    return (
        <div className="weatherTemperatureCont">
            {getWeatherIcon(weatherState)}
            <span className="temperature">{temperature}</span>
            <span className="temperatureType">{' Cº'}</span>
        </div>
    );
};

WeatherTemperature.displayName = 'WeatherTemperature';

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string
};

export default WeatherTemperature;