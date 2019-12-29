import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PronosticoExtendido extends Component {
    render() {
        const { city } = this.props
        return (<div>Pronostico para {city}</div>)
    }
}

PronosticoExtendido.propTypes = {
    city: PropTypes.string.isRequired,
}

export default PronosticoExtendido;