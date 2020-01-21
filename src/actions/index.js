import transformarPronostico from './../services/transformarPronostico';
import transformarClima from './../services/transformarClima';

export const SET_CITY = 'SET_CITY';
export const SET_PRONOSTICO_DATOS = 'SET_PRONOSTICO_DATOS';
export const GET_CLIMA_CIUDAD = 'GET_CLIMA_CIUDAD';
export const SET_CLIMA_CIUDAD = 'SET_CLIMA_CIUDAD';

const setCity = payload => ({ type: SET_CITY, payload });
const setPronosticoDatos = payload => ({ type: SET_PRONOSTICO_DATOS, payload });
const getClimaCiudad = payload => ({ type: GET_CLIMA_CIUDAD, payload });
const setClimaCiudad = payload => ({ type: SET_CLIMA_CIUDAD, payload });

const apiKey = '3c106558b2898da5d0704fe61e9bac2a';
const url = `https://api.openweathermap.org/data/2.5/forecast`;
const urlClima = `https://api.openweathermap.org/data/2.5/weather`;

export const setCiudadSeleccionada = payload => {
    
    return dispatch => {
        const urlPronostico = `${url}?q=${payload}&appid=${apiKey}`;
    
        //activar en el estado un indicador de busqueda de datos
        dispatch(setCity(payload)); //establece la ciudad de forma sincrona el edo
        
        return fetch(urlPronostico).then(
            datos => (datos.json())
        ).then(
            climaDatos => {
                const pronosticoDatos = transformarPronostico(climaDatos);
                console.log(pronosticoDatos);

                //modificar el estado con el resultado de la promise (fetch)
                dispatch(setPronosticoDatos({city: payload, pronosticoDatos}));
            }
        );
    };
};

export const setClima = payload => {

    return dispatch => {
        payload.forEach(city => {
            const apiClima = `${urlClima}?q=${city}&appid=${apiKey}`;

            dispatch(getClimaCiudad(city));
            
            fetch(apiClima).then(datos => {
                return datos.json();
            }).then(climaDatos => {
                const clima = transformarClima(climaDatos);
                //donde sea invocado el reducer debe de tener los mismos params que aqui
                dispatch(setClimaCiudad({city, clima}));
            });    
        });
    }
}