import React, { Component } from 'react';

class ForecastExtended extends Component {
    render(){
        const { city } = this.props;
        return (
            <div>{`Something is happening here in ${city}` }</div>
        )
    }
}

ForecastExtended.displayName = 'ForecastExtended';

export default ForecastExtended;