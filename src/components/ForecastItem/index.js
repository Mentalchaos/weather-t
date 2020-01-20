import React from 'react';
import WeatherData from '../WeatherLocation/WeatherData';

const ForeCastItem = ({ weekDay , time, data }) => {

    return (
        <div>
            <div>{`${weekDay} ${time}`}</div>
            <WeatherData data={data} />
        </div>
    );
}

export default ForeCastItem;

