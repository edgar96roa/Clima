import { createStore } from 'redux';
import { city } from './../reducers/city';

const estadoInicial = {
    city: 'Siwah,eg'
};

/* Llamo el reducer importandolo y dandole el nombre { city } */
export const store = createStore(city, estadoInicial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());