import Joi from '@hapi/joi'

function validarEvento(evento){
    const eventoSchema = {
        //id: Joi.number().integer().min(0),
        nombre: Joi.string().alphanum().min(1).required(),
        direccion: Joi.string().alphanum().min(1).required(),
        fecha: Joi.date().iso().required(),
        creador: Joi.string().alphanum().min(1).required(),
        contacto: Joi.string().email().max(999).required()
    }
    const { error } = Joi.validate(evento, eventoSchema)
    if (error) {
        throw { message: error.message, status: 400 }
    }
}


export {
    validarEvento
}