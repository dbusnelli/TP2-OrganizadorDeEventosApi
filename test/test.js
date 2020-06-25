import {EventosApi} from '../api/eventosApi.js'

const eventosApi = new EventosApi()

eventosApi.crearEvento("Cumpleaños","Av Nazca 1560","23/06/2020","Martin","mail@gmail.com")

console.log(eventosApi.obtenerEventos)