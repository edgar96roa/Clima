import convert from 'convert-units';
import { SUN } from './../constants/Climas';

const getTemperatura = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(1));
}

const getEstadoClima = clima => {
    return SUN;
}

const transformarClima = (climaDatos) => {
    let clima;
    const { humidity, temp } = climaDatos.main;
    const { speed } = climaDatos.wind;
    //debugger;
    const estadoClima = getEstadoClima(clima);
    const temperatura = getTemperatura(temp);

    const datos = {
        humedad: humidity,
        temperatura,
        estadoClima: estadoClima,
        viento: `${speed} m/s`,
    }

    return datos;
}

export default transformarClima;