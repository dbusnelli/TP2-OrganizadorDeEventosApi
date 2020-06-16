const fetch = require ('node-fetch')
const apiVerCoordDeIP = require ('../moduloVerCoordDeIP/app.js')

const api_url = 'https://places.ls.hereapi.com/places/v1/autosuggest?'

class ApiBuscarDirecTraerCoord{

    constructor(api_key) {
        this.api_key = api_key
        this.url = api_url
    }


    async buscarDireccion(busqueda,coordDeDondeSeBusca){
     
        try {
            
            const ubicacion = coordDeDondeSeBusca[0]+','+coordDeDondeSeBusca[1];
    
            let paramsRequest = 'at=' + ubicacion + '&q=' + busqueda + '&apiKey=' + this.api_key
            let request= this.url + paramsRequest
            let response = await fetch(request)
            let json = await response.json()
    
            let coordFinal = []
            coordFinal.push(json.results[0].position[0])
            coordFinal.push(json.results[0].position[1])
    
            return(coordFinal)
    
        } catch (error) {
            throw error
        }
    }
}

module.exports = {
    ApiBuscarDirecTraerCoord
}

