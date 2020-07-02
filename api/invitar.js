export class Invitacion{    
    constructor(eventosDAO,invitadosDAO,sendMail,validacionesInvitados){
        this.eventosDAO = eventosDAO
        this.sendMail = sendMail
        this.invitadosDAO = invitadosDAO
        this.validacionesInvitados = validacionesInvitados
    }
    
    enviarInvitacion(idEvento,nombreInvitado,contactoInvitado){
        let err = ''
        try {
            let evento = this.eventosDAO.getById(idEvento)
            let invitadoNuevo = {id:"",idEvento:idEvento,nombre:nombreInvitado,contacto:contactoInvitado}
            this.validacionesInvitados(invitadoNuevo)
            this.invitadosDAO.agregar(invitadoNuevo)
            let mensaje = generarMensaje(evento,invitadoNuevo.nombre)
            this.sendMail(contactoInvitado,'invitación a evento',mensaje)
        } catch (error) {
            console.log(error)
            err += error
        }
    }
    generarMensaje(invitado,evento){
        return 'Hola '+invitado+', fuiste invitado por '+evento.creador+' al evento '+evento.nombre+' del dia '+evento.fecha+' en '+evento.direccion+'.';
    }
}
/*
const invitacion = new Invitacion()
export default{
    invitacion
}
*/