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
            city: null
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
                    { city ? <ForecastExtended city={city} /> : <p>No se ha seleccionado una ciudad</p>}
                </div>
            </div>
        )
    }
}

App.displayName = 'App';

export default App;
