import fetch from 'node-fetch'

const api_url = 'http://api.ipapi.com/api/check?access_key='


class ApiVerCoordDeIP{

    constructor(api_key){
        this.api_key = api_key
        this.api_url = api_url
    }

    async verUbicacion (){
        try {
            let request= this.api_url + this.api_key
            let response = await fetch(request)
            let json = await response.json()
    
            let coord = []
            coord.push(json.latitude)
            coord.push(json.longitude)
    
            return(coord)
    
        } catch (error) {
            throw error
        }
    }
}

export {
    ApiVerCoordDeIP
} 