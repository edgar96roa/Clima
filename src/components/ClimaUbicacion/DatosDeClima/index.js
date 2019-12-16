import React from 'react';
import PropTypes from 'prop-types';
import TemperaturaDeClima from './TemperaturaDeClima';
import InformacionExtraDeClima from './InformacionExtraDeClima';
import './estilos.css';

const DatosDeClima = ({ datos }) => {
    const { temperatura, estadoClima, humedad, viento } = datos;
    return (
        <div className='datosDeClimaCont'>
            <TemperaturaDeClima temperatura={temperatura} estadoClima={estadoClima} />
            <InformacionExtraDeClima humedad={humedad} viento={viento} />
        </div>
    );
};

DatosDeClima.propTypes = {
    datos: PropTypes.shape({
        temperatura: PropTypes.number.isRequired,
        estadoClima: PropTypes.string.isRequired,
        humedad: PropTypes.number.isRequired,
        viento: PropTypes.string.isRequired,
    }),
};

export default DatosDeClima;