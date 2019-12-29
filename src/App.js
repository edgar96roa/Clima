import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';
import UbicacionLista from './components/UbicacionLista';
import PronosticoExtendido from './components/PronosticoExtendido';

const ciudades = [
    "Mexico City,mx",
    "Caracas,ve",
    "Siwah,eg"
];

class App extends Component {

    constructor() {
        super();
        this.state = { city: '...'};
    }

    handleSelectedUbicacion = city => {
        this.setState({ city });
        console.log(`handleSelectedUbicacion ${city}`);
    }

    render() {
        const { city } = this.state;
        return (
            <Container>
                <Grid>
                    <Row>
                        <AppBar color="primary" position="static">
                            <Toolbar variant="dense">
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" color="inherit">
                                    Pron&oacute;stico del clima    
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            {/*<div className="App">*/}
                                <UbicacionLista ciudades={ciudades}
                                    onSelectedUbicacion={this.handleSelectedUbicacion}>
                                </UbicacionLista>
                            {/*</div>*/}
                        </Col>
                        <Col xs={12} md={6}>
                            <Paper>
                                <div className="detalle">
                                    <PronosticoExtendido city={city}>
                                    </PronosticoExtendido>
                                </div>
                            </Paper>
                        </Col>
                    </Row>
                </Grid>
            </Container>
        );
    }
}

export default App;