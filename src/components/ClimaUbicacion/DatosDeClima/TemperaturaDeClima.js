import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY
} from './../../../constants/Climas';
import PropTypes from 'prop-types';
import './estilos.css';

const setNombreDeIcono = estadoClima => {
    switch (estadoClima) {
        case CLOUD:
            return "cloud";
        case CLOUDY:
            return "cloudy";
        case SUN:
            return "day-sunny";
        case RAIN:
            return "rain";
        case SNOW:
            return "snow";
        case WINDY:
            return "windy";
        default:
            return "day-sunny";
    }
};

const getIconoDeClima = estadoClima => {
    return (<WeatherIcons className='iconoDeClima' name={setNombreDeIcono(estadoClima)} size="3x" />);
};

const TemperaturaDeClima = ({ temperatura, estadoClima }) => (
    <div className='temperaturaDeClimaCont'>
        {getIconoDeClima(estadoClima)}
        <span className='temperatura'>{` ${temperatura}`}</span>
        <span className='temperaturaGrados'>{` \u00b0C`}</span>
    </div>
);

TemperaturaDeClima.propTypes = {
    temperatura: PropTypes.number,
    estadoClima: PropTypes.string,
};

export default TemperaturaDeClima;