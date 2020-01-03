import moment from 'moment';
import 'moment/locale/es';
import transformarClima from './transformarClima';

/*
 * Leo los datos del server para el pronóstico
 */
const transformarPronostico = datos => (
    datos.list.filter(item => (
        moment.unix(item.dt).hour() === 6 ||
        moment.unix(item.dt).hour() === 12 ||
        moment.unix(item.dt).hour() === 18
    )).map(item => (
        {
            diaDeSemana: moment.unix(item.dt).format('ddd'),
            hora: moment.unix(item.dt).hour(),
            datos: transformarClima(item)
        }
    ))
);

export default transformarPronostico;