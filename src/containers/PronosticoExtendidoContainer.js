import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PronosticoExtendido from './../components/PronosticoExtendido';

class PronosticoExtendidoContainer extends Component {
    render() {
        return (
            this.props.city === null ?
            <h3 className="pronosticoTitulo">Da clic en alguna ciudad para mostrar su pron&oacute;stico</h3> :
            this.props.city &&
            <PronosticoExtendido city={this.props.city}></PronosticoExtendido>
        );
    }
}

PronosticoExtendidoContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

const mapStateToProps = ({ city }) => ({ city });

export default connect(mapStateToProps, null)(PronosticoExtendidoContainer);