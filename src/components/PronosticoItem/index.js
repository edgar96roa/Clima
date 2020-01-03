import React from 'react';
import PropTypes from 'prop-types';
import DatosDeClima from './../ClimaUbicacion/DatosDeClima';

const PronosticoItem = ({ diaDeSemana, hora, datos }) => (
    <div>
        <h2>{diaDeSemana} - {hora} hrs</h2>
        <DatosDeClima datos={datos}></DatosDeClima>
    </div>
);

PronosticoItem.propTypes = {
    diaDeSemana: PropTypes.string.isRequired,
    hora: PropTypes.number.isRequired,
    datos: PropTypes.shape({
        temperatura: PropTypes.number.isRequired,
        estadoClima: PropTypes.string.isRequired,
        humedad: PropTypes.number.isRequired,
        viento: PropTypes.string.isRequired,
    }),
}

export default PronosticoItem;  