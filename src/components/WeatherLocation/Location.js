import React from 'react';

const Location = ({ country }) => {
    return (
        <div className="locationCont">
            <h1> { country } </h1>
        </div>
    )
}

Location.defaultProps = {
    country: ''
}

export default Location;