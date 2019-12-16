import React from 'react';
import PropTypes from 'prop-types';
import './DatosDeClima/estilos.css';

const Ubicacion = ({ city }) => (
    <div className='ubicacionCont'>
            <h1>
                {city}
            </h1>
        </div>
 );

Ubicacion.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Ubicacion;