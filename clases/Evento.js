const { error } = require("console")

class Evento {
    constructor(params){
        if(this.validarEvento(params)){

        }else{
            throw new error("Parametros del evento no validos")
        }
    }

    async validarEvento(params){
        let valido = false



        return valido
    }
}

module.exports.Evento = Evento