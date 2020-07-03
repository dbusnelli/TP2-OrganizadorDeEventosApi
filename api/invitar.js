export default class Invitacion{    
    constructor(eventosDAO,invitadosDAO,sendMail,validacionesInvitados){
        this.eventosDAO = eventosDAO
        this.sendMail = sendMail
        this.invitadosDAO = invitadosDAO
        this.validacionesInvitados = validacionesInvitados
    }
    
    enviarInvitacion(invitado){
        // invitado es un parametro que tiene idEvento, nombre y contacto
        let err = ''
        try {
            let evento = this.eventosDAO.getById(invitado.idEvento)
            this.validacionesInvitados(invitado)
            this.invitadosDAO.agregar(invitado)
            let mensaje = this.generarMensaje(invitado.nombre,evento)
            this.sendMail(invitado.contacto,'invitación a evento',mensaje)
        } catch (error) {
            err += error
        }
        return err
    }
    generarMensaje(invitado,evento){
        return 'Hola '+invitado+', fuiste invitado por '+evento.creador+' al evento '+evento.nombre+' del dia '+evento.fecha+' en '+evento.direccion+'.';
    }
}