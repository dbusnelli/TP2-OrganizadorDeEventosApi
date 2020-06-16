
const moduloBuscarDirecTraerCoord = require ('./moduloBuscarDirecTraerCoord/app.js')
const moduloVerCoordDeIP = require ('./moduloVerCoordDeIP/app.js')
const calcularDistancia = require ('./calcularDistancia.js')


const API_KEY_apiVerCoordDeIP = 'aba93c5572f6942f643eed84c9963f14'
const API_KEY_apiBuscarDirecTraerCoord = 'SWADq6EQKQd_G17gkEUqSYUoKt70r4F56swtj-QbiEo'


const apiVerCoordDeIP = new moduloVerCoordDeIP.ApiVerCoordDeIP(API_KEY_apiVerCoordDeIP)
const apiBuscarDirecTraerCoord = new moduloBuscarDirecTraerCoord.ApiBuscarDirecTraerCoord(API_KEY_apiBuscarDirecTraerCoord)

async function test(){

    //--Al crear un evento--

    //Buscar una direccion y traer coord
    let coordDondeSeHaceLaBusqueda = await apiVerCoordDeIP.verUbicacion()
    let coord1 = await apiBuscarDirecTraerCoord.buscarDireccion('Rivadavia 6000',coordDondeSeHaceLaBusqueda)




    //---Para ver la distancia--

    //El sistema se fija las coord de la ip del usuario  que quiere saber la distancia
    let coord2 = await apiVerCoordDeIP.verUbicacion()

    //El sistema se fija la distancia entre dos coord
    let distancia = await calcularDistancia.calcularDistancia(coord1,coord2)



    console.log('La distancia a la que esta el evento es de '+distancia+' kilometros')
}

test()