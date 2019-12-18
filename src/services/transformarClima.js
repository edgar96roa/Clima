import convert from 'convert-units';
import {
    //CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    //WINDY,
    THUNDER,
    DRIZZLE
} from './../constants/Climas';

const getTemperatura = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(1));
}

const getEstadoClima = clima => {
    const { id } = clima[0];

    if (id < 300) {
        return THUNDER;
    } else if (id < 400) {
        return DRIZZLE;
    } else if (id < 600) {
        return RAIN;
    } else if (id < 700) {
        return SNOW;
    } else if (id === 800 ) {
        return SUN
    } else {
        return CLOUDY
    }
}

const transformarClima = (climaDatos) => {
    const { weather } = climaDatos;
    const { humidity, temp } = climaDatos.main;
    const { speed } = climaDatos.wind;
    //debugger;
    const estadoClima = getEstadoClima(weather);
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