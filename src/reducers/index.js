import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { cities, 
         getPronosticoDatosDeCiudades as _getPronosticoDatosDeCiudades, 
         getClimaCiudades as _getClimaCiudades } from './cities';
import { city } from './city';

export default combineReducers({
    cities,
    city
});

export const getCity = createSelector(state => state.city, city => city);

export const getPronosticoDatosDeCiudades = createSelector(state => state.cities, getCity, _getPronosticoDatosDeCiudades);

export const getClimaCiudades = createSelector(state => state.cities, _getClimaCiudades);