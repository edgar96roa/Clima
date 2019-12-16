import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import './App.css';
import ClimaUbicacion from './components/ClimaUbicacion';

class App extends Component {
    render() {
        return (
            <Container>
                <div className="App">
                    <ClimaUbicacion></ClimaUbicacion>
                </div>
            </Container>
        );
    }
}

export default App;