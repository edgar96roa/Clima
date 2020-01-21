import React from 'react';
import PropTypes from 'prop-types';
import Ubicacion from './Ubicacion';
import DatosDeClima from './DatosDeClima';
import './DatosDeClima/estilos.css';
import CircularProgress from '@material-ui/core/CircularProgress';

//recibiremos la accion, city y datos como params para hacer el componente state a un componente funcional
const ClimaUbicacion = ({ onClimaUbicacionClick, city, datos }) => (
    <div className='climaUbicacionCont' onClick={onClimaUbicacionClick} >
        <Ubicacion city={city} />
        {datos ? <DatosDeClima datos={datos} /> : <CircularProgress />}
    </div>
);

ClimaUbicacion.propTypes = {
    city: PropTypes.string,
    onClimaUbicacionClick: PropTypes.func,
    //agregamos datos del clima porque lo pedimos en las proíedades
    datos: PropTypes.shape({
        temperatura: PropTypes.number.isRequired,
        estadoClima: PropTypes.string.isRequired,
        humedad: PropTypes.number.isRequired,
        viento: PropTypes.string.isRequired,
    }),
}

export default ClimaUbicacion;