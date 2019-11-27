import React, { Component } from 'react';

class ForecastExtended extends Component {
    render(){
        const { city , style } = this.props;
        return (
            <h1 style={style}>{`Something is happening here in ${city}` }</h1>
        )
    }
}

ForecastExtended.displayName = 'ForecastExtended';

export default ForecastExtended;