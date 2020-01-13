import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCity } from './../actions';
import UbicacionLista from './../components/UbicacionLista';

class UbicacionListaContainer extends Component{
    
    handleSelectedUbicacion = city => {
        this.props.setCity(city);
    }
    
    render(){
        return(
            <UbicacionLista ciudades={this.props.ciudades}
                onSelectedUbicacion={this.handleSelectedUbicacion}>
            </UbicacionLista>
        );
    }
}

UbicacionListaContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    ciudades: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => (
    {
        setCity: valor => dispatch(setCity(valor))
    }
);

/*
const AppConectada = connect(null, mapDispatchToProps)(App);
export default AppConectada;
*/

/*Toma el componente UbicacionListaContainer y lo transforma en otro componente superior*/
export default connect(null, mapDispatchToProps)(UbicacionListaContainer);