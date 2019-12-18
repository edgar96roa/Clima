import React from 'react';
import PropTypes from 'prop-types';
import ClimaUbicacion from './ClimaUbicacion';

//toma la cadena <<ciudades>> y mapea cada ciudad en un componente
const cadenaToComponente = (ciudades) => (
    ciudades.map( city => (<ClimaUbicacion city = {city} />))
);

//toma el arreglo de ciudades en el componente padre y llama a cadenaToComponente
const UbicacionLista = ({ ciudades }) => (
    <div>
        {cadenaToComponente(ciudades)}
    </div>
);

UbicacionLista.propTypes = {
    ciudades: PropTypes.array.isRequired,
}

export default UbicacionLista;