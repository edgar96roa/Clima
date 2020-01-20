import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPronosticoDatosDeCiudades, getCity } from './../reducers';
import PronosticoExtendido from './../components/PronosticoExtendido';

class PronosticoExtendidoContainer extends Component {
    render() {
        const { city, pronosticoDatos } = this.props;
        return (
            city === null ?
            <h3 className="pronosticoTitulo">Da clic en alguna ciudad para mostrar su pron&oacute;stico</h3> :
            this.props.city &&
            <PronosticoExtendido city={city} pronosticoDatos={pronosticoDatos}></PronosticoExtendido>
        );
    }
}

PronosticoExtendidoContainer.propTypes = {
    city: PropTypes.string.isRequired,
    pronosticoDatos: PropTypes.array,
};

const mapStateToProps = state => ({ city: getCity(state), pronosticoDatos: getPronosticoDatosDeCiudades(state) });

export default connect(mapStateToProps, null)(PronosticoExtendidoContainer);