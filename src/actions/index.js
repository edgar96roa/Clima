import transformarPronostico from './../services/transformarPronostico';

export const SET_CITY = 'SET_CITY';
export const SET_PRONOSTICO_DATOS = 'SET_PRONOSTICO_DATOS';

const setCity = payload => ({ type: SET_CITY, payload });
const setPronosticoDatos = payload => ({ type: SET_PRONOSTICO_DATOS, payload });

const apiKey = '3c106558b2898da5d0704fe61e9bac2a';
const url = `https://api.openweathermap.org/data/2.5/forecast`;

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