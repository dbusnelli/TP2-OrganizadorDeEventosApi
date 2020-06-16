const {ApiBuscarDirecTraerCoord} = require ('./moduloGeoMapping/moduloBuscarDirecTraerCoord/app.js')
const {ApiVerCoordDeIP} = require ('./moduloGeoMapping/moduloVerCoordDeIP/app.js')
//const calculadorDistancia = require ('./moduloGeoMapping/calcularDistancia.js')

const {Evento} = require ('./clases/Evento.js')

const apiKeys = require ('./apiKeys.js')
const API_KEY_apiVerCoordDeIP = apiKeys.API_KEY_apiVerCoordDeIP
const API_KEY_apiBuscarDirecTraerCoord = apiKeys.API_KEY_apiBuscarDirecTraerCoord

const apiBuscarDireccion = new ApiBuscarDirecTraerCoord(API_KEY_apiBuscarDirecTraerCoord)
const apiVerCoordDeIP = new ApiVerCoordDeIP(API_KEY_apiVerCoordDeIP)

async function crearEvento(params){
    try {
        
        let nombreEvento = params[0]
        let ubicacionEvento = apiBuscarDireccion.buscarDireccion(params[1],apiVerCoordDeIP.verUbicacion())
        
        let evento = new Evento(nombreEvento,ubicacionEvento)

        return evento

    } catch (error) {
        console.log(error.log)
    }   
}