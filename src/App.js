import React, { Component } from 'react';

// Components
import LocationList from './components/WeatherLocation/LocationList';
import ForecastExtended from './components/ForecastExtended';

// Constants
import { cities } from './components/WeatherLocation/constants/cities';

class App extends Component {
    constructor(){
        super();
        this.state = {
            city: 'eaea'
        }
    }

    handleSelectedLocation = city => {
        this.setState({
            city
        })
    }

    render(){
        const { city } = this.state
        return (
            <div className="App">
                <LocationList cities={cities} handleSelectedLocation={ this.handleSelectedLocation } />
                <div className="details">
                    <ForecastExtended city={city} />
                </div>
            </div>
        )
    }
}

App.displayName = 'App';

export default App;
