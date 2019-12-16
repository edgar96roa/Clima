import React from 'react';
import PropTypes from 'prop-types';
import './estilos.css';

const InformacionExtraDeClima = ({ humedad, viento }) => (
    <div className='informacionExtraDeClimaCont'>
        <span className='informacionExtraClima'>{`Humedad: ${humedad} %`}</span>
        <span className='informacionExtraClima'>{`Viento: ${viento}`}</span>
    </div>
);

InformacionExtraDeClima.propTypes = {
    humedad: PropTypes.number.isRequired,
    viento: PropTypes.string.isRequired
};

export default InformacionExtraDeClima;