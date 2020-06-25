import {ApiBuscarDirecTraerCoord} from '../../moduloGeoMapping/moduloBuscarDirecTraerCoord/app.js'
import {ApiVerCoordDeIP} from '../../moduloGeoMapping/moduloVerCoordDeIP/app.js'
import {calcularDistancia} from '../../moduloGeoMapping/calcularDistancia.js'


const API_KEY_apiVerCoordDeIP = 'aba93c5572f6942f643eed84c9963f14'
const API_KEY_apiBuscarDirecTraerCoord = 'SWADq6EQKQd_G17gkEUqSYUoKt70r4F56swtj-QbiEo'

const apiBuscarDireccion = new ApiBuscarDirecTraerCoord(API_KEY_apiBuscarDirecTraerCoord)
const apiVerCoordDeIP = new ApiVerCoordDeIP(API_KEY_apiVerCoordDeIP)

function calcDistancia(direccion){

    try {
        let origen = apiVerCoordDeIP.verUbicacion()
        let destino = apiBuscarDireccion.buscarDireccion(direccion,origen)

        distancia = calcularDistancia(origen,destino)

    } catch (error) {
        throw error
    }
    
    return distancia
}

export {
    calcDistancia
}