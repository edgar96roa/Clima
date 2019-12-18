import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ubicacion from './Ubicacion';
import DatosDeClima from './DatosDeClima';
import transformarClima from './../../services/transformarClima';
import './DatosDeClima/estilos.css';
import CircularProgress from '@material-ui/core/CircularProgress';


const apiKey = '3c106558b2898da5d0704fe61e9bac2a';
const url = `https://api.openweathermap.org/data/2.5/weather`;

class ClimaUbicacion extends Component {

    constructor({ city }) {
        super();
        this.state = {
            city,
            datos: null
        };
    }

    componentDidMount() {
        const { city } = this.state;
        const apiClima = `${url}?q=${city}&appid=${apiKey}`;
        fetch(apiClima).then(datos => {
            //console.log(datos);
            return datos.json();
        }).then(climaDatos => {
            //debugger;
            const datos = transformarClima(climaDatos);
            this.setState({ datos: datos });
            console.log(climaDatos);
        });
    }

    render = () => {
        const { city, datos } = this.state;
        return (
            <div className='climaUbicacionCont'>
                <Ubicacion city={city} />
                {datos ? <DatosDeClima datos={datos} /> : <CircularProgress />}
            </div>
        );
    };
}

ClimaUbicacion.propTypes = {
    city: PropTypes.string
}

export default ClimaUbicacion;