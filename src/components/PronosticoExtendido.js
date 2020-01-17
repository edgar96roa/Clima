import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PronosticoItem from './PronosticoItem';
import transformarPronostico from './../services/transformarPronostico';
import './estilos.css';

/*const dias = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];

const datos = {
    temperatura: 10,
    estadoClima: 'normal',
    humedad: 10,
    viento: '4 m/s'
}*/

const apiKey = '3c106558b2898da5d0704fe61e9bac2a';
const url = `https://api.openweathermap.org/data/2.5/forecast`;

class PronosticoExtendido extends Component {

    constructor() {
        super();
        this.state = { pronosticoDatos: null }
    }

    componentDidMount() {
        this.actualizarCiudad(this.props.city);
    }

    static getDerivedStateFromProps(props, state){
        if(props.city !== state.city){
            return{
                city: props.city,
            };
        }
        return null;
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.city !== this.state.city) {
            this.setState({ pronosticoDatos: null });
            this.actualizarCiudad(prevProps);
        }
      }

    /*Esa función ha sido reemplazada por componentDidUpdate y getDerivedStateFromProps,
    antes era componentWillReceiveProps pero fue deprecada en la version 16.3
    componentDidUpdate(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({ pronosticoDatos: null });
            this.actualizarCiudad(nextProps.city);
        }
    }*/

    actualizarCiudad = city => {
        const urlPronostico = `${url}?q=${this.props.city}&appid=${apiKey}`;

        fetch(urlPronostico).then(datos => {
            return datos.json();
        }).then(climaDatos => {
            console.log(climaDatos);
            const pronosticoDatos = transformarPronostico(climaDatos);
            console.log(pronosticoDatos);
            this.setState({ pronosticoDatos });
        });
    }

    /*Muestra el pron�stico de varios d�as para una ciudad*/
    mostrarPronosticoItemDias(pronosticoDatos) {
        return pronosticoDatos.map(pronostico => (
            <PronosticoItem
                key={`${pronostico.diaDeSemana}${pronostico.hora}`}
                diaDeSemana={pronostico.diaDeSemana}
                hora={pronostico.hora}
                datos={pronostico.datos}>
            </PronosticoItem>)
        );
    }

    mostrarProgreso() {
        return "Cargando...";
    }

    render() {
        const { city } = this.props;
        const { pronosticoDatos } = this.state;
        return (
            <div>
                <h3 className='pronosticoTitulo'>Pron&oacute;stico para {city}</h3>
                {pronosticoDatos ?
                    this.mostrarPronosticoItemDias(pronosticoDatos) : 
                    this.mostrarProgreso()
                }
            </div>
        );
    }
}

PronosticoExtendido.propTypes = {
    city: PropTypes.string.isRequired,
    pronosticoDatos: PropTypes.array,
}

export default PronosticoExtendido;