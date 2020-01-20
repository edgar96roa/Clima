import { createSelector } from 'reselect';
import { SET_PRONOSTICO_DATOS } from './../actions';

/* Exporto la función reducer tomando el estado y la accion, después renombro al reducer como city*/
export const cities = (state = {}, action) => {
    switch(action.type){
        case SET_PRONOSTICO_DATOS:
            //tomo como params city y pronosticoDatos de la accion setPronosticoDatos
            const { city, pronosticoDatos } = action.payload;
            // ...state crea una copia del estado del objeto
            // creamos el diccionario de ciudades, ej city: city1(pronostico, clima)
            return { ...state, [city]: { pronosticoDatos}};
        default:
            return state;
    }
}

export const getPronosticoDatosDeCiudades = 
    createSelector((state, city) => state[city] && state[city].pronosticoDatos, pronosticoDatos => pronosticoDatos);