import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './weatherLocation.css';
import { CircularProgress } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { getWeatherByCity } from './services/getWeatherByCity';
import { getData, getCity } from './services/getWeatherData';

class WeatherLocation extends Component {
    constructor(props) {
        super(props);
        const { city } = props;
        this.state = {
            city: city,
            data: null
        };
    };

    componentDidMount(){
        this.handleUpdateData();
    }

    componentDidUpdate(){

    }

    handleUpdateData = () => {
        const api_weather = getWeatherByCity(this.props.city);
        fetch(api_weather).then( response => {
            return response.json();
        }).then( data => {
            // Get data and city and then pass them to the state
            const newWeather = getData(data);
            const newCity = getCity(data);

            this.setState({
                data: newWeather,
                city: newCity
            });
        });
    };

    render(){
        const { city , data } = this.state;
        const { handleSelectedLocation } = this.props;
        return (
            <div className="weatherLocationCont" onClick={handleSelectedLocation}>
                <Location country={city} />
                { data && city ? <WeatherData data={data} /> : <CircularProgress /> } 
            </div>
        );
    };
};

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    handleSelectedLocation: PropTypes.func.isRequired
}

WeatherLocation.displayName = 'WeatherLocation';

export default WeatherLocation;