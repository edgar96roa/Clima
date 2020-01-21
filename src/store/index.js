import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers';

const estadoInicial = {
    city: 'Caracas,ve'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* Llamo el reducer importandolo y dandole el nombre { city } */
export const store = createStore(reducers, estadoInicial, composeEnhancers(applyMiddleware(thunk)));