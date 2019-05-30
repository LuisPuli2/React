import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const strToComponents = cities => (
cities.map(city => <WeatherLocation city={city} key={city}></WeatherLocation>)
);

const LocationList = ({cities}) => (
    <div>
        {strToComponents(cities)}
    </div>
);

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;