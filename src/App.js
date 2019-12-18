import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import './App.css';
import UbicacionLista from './components/UbicacionLista';

const ciudades = [
    "Mexico City,mx",
    "Caracas,ve",
    "Siwah,eg"
];

class App extends Component {
    render() {
        return (
            <Container>
                <div className="App">
                    <UbicacionLista ciudades = {ciudades}></UbicacionLista>
                </div>
            </Container>
        );
    }
}

export default App;