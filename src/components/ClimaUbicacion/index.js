import React, { Component } from 'react';
import Ubicacion from './Ubicacion';
import DatosDeClima from './DatosDeClima';
import transformarClima from './../../services/transformarClima';
//import { CLOUD } from './../../constants/Climas';
import './DatosDeClima/estilos.css';
import CircularProgress from '@material-ui/core/CircularProgress';


const ubicacion = "Mexico City,mx";
const apiKey = '3c106558b2898da5d0704fe61e9bac2a';
const apiClima = `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion}&appid=${apiKey}`;

/*
const datos = {
    temperatura: 20,
    estadoClima: CLOUD,
    humedad: 60,
    viento: '20 m/s',
};
*/

class ClimaUbicacion extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Mexico City',
            datos: null
        };
        console.log("constructor");
    }

    update = () => {
        fetch(apiClima).then( datos => {
            //console.log(datos);
            return datos.json();
        }).then(climaDatos => {
            //debugger;
            const datos = transformarClima(climaDatos);
            this.setState({ datos: datos });
            //console.log(climaDatos);
        });
    }

    /*UNSAFE_componentWillUpdate() {
        console.log("componentWillUpdate");
    }*/

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    /*UNSAFE_componentWillMount() {
        console.log("componentWillMount");
    }*/

    componentDidMount() {
        this.update();
    }

    render = () => {
        console.log("render");

        const { city, datos } = this.state;

        return (
            <div className='climaUbicacionCont'>
                <Ubicacion city={city} />
                {datos ? <DatosDeClima datos={datos} /> : <CircularProgress />}
            </div>
        );
    };
}

export default ClimaUbicacion;