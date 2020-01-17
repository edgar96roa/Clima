import React from 'react';
import PropTypes from 'prop-types';
import ClimaUbicacion from './ClimaUbicacion';
import './estilos.css';

//toma el arreglo de ciudades en el componente padre y llama a cadenaToComponente
const UbicacionLista = ({ ciudades, onSelectedUbicacion }) => {
    const handleClimaUbicacionClick = city => {
        onSelectedUbicacion(city);
    };

    //toma la cadena <<ciudades>> y mapea cada ciudad en un componente
    const cadenaToComponente = ciudades => (
        ciudades.map(city =>
            (
                <ClimaUbicacion
                    key={city}
                    city={city}
                    onClimaUbicacionClick={() => handleClimaUbicacionClick(city)}
            />)
        )
    );

    return (
        <div className="ubicacionLista">
            {cadenaToComponente(ciudades)}
        </div>
    );
};

UbicacionLista.propTypes = {
    ciudades: PropTypes.array.isRequired,
    onSelectedUbicacion: PropTypes.func,
}

export default UbicacionLista;