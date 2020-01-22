import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './../actions';
import { getClimaCiudades, getCity } from './../reducers';
import UbicacionLista from './../components/UbicacionLista';

class UbicacionListaContainer extends Component{
    
    componentDidMount() {
        const { setClima, setCiudadSeleccionada, ciudades, city } = this.props;
        
        setClima(ciudades);
        setCiudadSeleccionada(city);
    }
    

    handleSelectedUbicacion = city => {
        this.props.setCiudadSeleccionada(city);
    }
    
    render(){
        return(
            <UbicacionLista ciudades={this.props.ciudadesClima}
                onSelectedUbicacion={this.handleSelectedUbicacion}>
            </UbicacionLista>
        );
    }
}

UbicacionListaContainer.propTypes = {
    setCiudadSeleccionada: PropTypes.func.isRequired,
    setClima: PropTypes.func.isRequired,
    ciudades: PropTypes.array.isRequired,
    ciudadesClima: PropTypes.array,
    city: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
/*const mapDispatchToProps = dispatch => ({
        setCity: valor => dispatch(setCiudadSeleccionada(valor)),
        //establece las ciudades dentro del array que le pasamos a UbicacionListaContainer
        setClima: ciudades => dispatch(setClima(ciudades))
});*/

/*
const AppConectada = connect(null, mapDispatchToProps)(App);
export default AppConectada;
*/

const mapStateToProps = state => ({ 
    ciudadesClima: getClimaCiudades(state), 
    city: getCity(state) 
});

/*Toma el componente UbicacionListaContainer y lo transforma en otro componente superior*/
export default connect(mapStateToProps, mapDispatchToProps)(UbicacionListaContainer);