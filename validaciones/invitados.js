import Joi from '@hapi/joi'

function validarInvitado(invitado){
    const invitadoSchema = {
        //id: Joi.number().integer().min(0),
        idEvento: Joi.string().alphanum().min(1).required(),
        nombre: Joi.string().alphanum().min(1).required(),
        contacto: Joi.string().email().max(999).required()
    }
    const { error } = Joi.validate(invitado, invitadoSchema)
    if (error) {
        throw { message: error.message }
    }
}


export {
    validarInvitado
}