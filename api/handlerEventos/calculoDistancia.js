const {ApiBuscarDirecTraerCoord} = require('../../moduloGeoMapping/moduloBuscarDirecTraerCoord/app.js')
const {ApiVerCoordDeIP} = require('../../moduloGeoMapping/moduloVerCoordDeIP/app.js')
const calcularDistancia = require('../../moduloGeoMapping/calcularDistancia')


import apiKeys from '../../apiKeys'
const API_KEY_apiVerCoordDeIP = apiKeys.API_KEY_apiVerCoordDeIP
const API_KEY_apiBuscarDirecTraerCoord = apiKeys.API_KEY_apiBuscarDirecTraerCoord

const apiBuscarDireccion = new ApiBuscarDirecTraerCoord(API_KEY_apiBuscarDirecTraerCoord)
const apiVerCoordDeIP = new ApiVerCoordDeIP(API_KEY_apiVerCoordDeIP)

function calcularDistancia(direccion){

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
    calcularDistancia
}