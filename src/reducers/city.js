import { SET_CITY } from './../actions';

/* Exporto la función reducer tomando el estado y la accion, después renombro al reducer como city*/
export const city = (state = {}, action) => {
    switch(action.type){
        case SET_CITY:
            return action.payload;
        default:
            return state;
    }
}