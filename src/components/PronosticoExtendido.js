import React from 'react';
import PropTypes from 'prop-types';
import PronosticoItem from './PronosticoItem';
import './estilos.css';

/*Muestra el pron�stico de varios d�as para una ciudad*/
const mostrarPronosticoItemDias = (pronosticoDatos) => {
    return pronosticoDatos.map(pronostico => (
        <PronosticoItem
            key={`${pronostico.diaDeSemana}${pronostico.hora}`}
            diaDeSemana={pronostico.diaDeSemana}
            hora={pronostico.hora}
            datos={pronostico.datos}>
        </PronosticoItem>)
    );
}

const mostrarProgreso = () => {
    return "Cargando...";
}

const PronosticoExtendido = ({ city, pronosticoDatos}) => (

    <div>
        <h3 className='pronosticoTitulo'>Pron&oacute;stico para {city}</h3>
        {pronosticoDatos ?
            mostrarPronosticoItemDias(pronosticoDatos) : 
            mostrarProgreso()
        }
    </div>
);

PronosticoExtendido.propTypes = {
    city: PropTypes.string.isRequired,
    pronosticoDatos: PropTypes.array,
}

export default PronosticoExtendido;