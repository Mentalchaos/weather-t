import React, { Component } from 'react';
import './styles.css';
import ForeCastItem from './ForecastItem';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
]

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal'
}

class ForecastExtended extends Component {

    renderForecastItemDays = () => {
        return (
            days.map((day,key) =>
                <ForeCastItem
                    weekDay={day}
                    key={key}
                    time={'12:30 am'}
                    data={data}
                />
            )
        )
    }

    cityOrNot = city => {
        return city && `Pronóstico extendido para ${city}`;
    }

    render(){
        const { city } = this.props;
        return ( 
            <div>
                <h1 className="forecast-title">{ this.cityOrNot(city) }</h1>
                {this.renderForecastItemDays()}
            </div>
        )
    }
}

ForecastExtended.displayName = 'ForecastExtended';

export default ForecastExtended;