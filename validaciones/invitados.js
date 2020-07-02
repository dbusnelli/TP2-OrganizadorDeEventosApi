import Joi from 'joi'
function validarInvitado(invitado){
    const invitadoSchema = {
        idEvento: Joi.string().min(1).required(),
        nombre: Joi.string().min(1).required(),
        contacto: Joi.string().email().max(999).required()
    }
    const { error } = Joi.validate(invitado, invitadoSchema)
    if (error) {
        throw { message: error.message, status: 400 }
    }
}
export default{validarInvitado}