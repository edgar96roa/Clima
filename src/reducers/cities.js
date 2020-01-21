import { createSelector } from 'reselect';
import toPairs from 'lodash.topairs';
import { SET_PRONOSTICO_DATOS, GET_CLIMA_CIUDAD, SET_CLIMA_CIUDAD } from './../actions';

/* Exporto la función reducer tomando el estado y la accion, después renombro al reducer como city*/
export const cities = (state = {}, action) => {
    switch(action.type){
        case SET_PRONOSTICO_DATOS: {
            //tomo como params city y pronosticoDatos de la accion setPronosticoDatos
            const { city, pronosticoDatos } = action.payload;
            // ...state crea una copia del estado del objeto
            // creamos el diccionario de ciudades, ej city: city1(pronostico, clima)
            return { ...state, [city]: { ...state[city], pronosticoDatos}};
        }
        case GET_CLIMA_CIUDAD: {
            const city = action.payload;
            //  ...state[city], clima: null hace que loque tengamos en el estado se le agregue el estado de clima a la city
            return { ...state, [city]: { ...state[city], clima: null } };
        }
        case SET_CLIMA_CIUDAD: {
            const { city, clima } = action.payload;
            return { ...state, [city]: { ...state[city], clima } };
        }
        default:
            return state;
    }
}

export const getPronosticoDatosDeCiudades = 
    createSelector((state, city) => state[city] && state[city].pronosticoDatos, pronosticoDatos => pronosticoDatos);

const objetoToArray = cities => (toPairs(cities).map(([key, value]) => ({ key, name: key, datos: value.clima }) ));

export const getClimaCiudades = createSelector(state => objetoToArray(state), cities => cities );