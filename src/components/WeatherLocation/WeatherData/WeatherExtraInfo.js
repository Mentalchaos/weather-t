import React from 'react';

const WeatherExtraInfo = ({ humidity, wind }) => {
    return (
        <div className="extraInfoCont">
            <span className="extraInfoText"> { `Humedad: ${humidity}%`} </span>
            <span className="extraInfoText"> {`Viento: ${wind} `}</span>
        </div>
    );
};

WeatherExtraInfo.defaultProps = {
    humidity: '',
    wind: ''
};

WeatherExtraInfo.displayName = 'WeatherExtraInfo';

export default WeatherExtraInfo;