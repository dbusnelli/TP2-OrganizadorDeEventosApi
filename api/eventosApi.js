import validarEvento from '../validaciones/eventos'
import validarInvitado from '../validaciones/invitados'
import EventosDAO from '../data/eventosDAO'
import InvitadosDAO from '../data/invitadosDAO'


import notificar from './handlerEventos/notificador'
import calcularDistancia from './handlerEventos/calculoDistancia'


class EventosApi {
    eventosDAO = new EventosDAO()
    invitadosDAO = new InvitadosDAO()

    //----Agregar un Evento----

    async crearEvento(nombre,direccion,fecha,creador,contacto){
        
        try {

            eventoNuevo = {id:"",nombre:nombre,direccion:direccion,fecha:fecha,creador:creador,contacto:contacto}
            await validarEvento(eventoNuevo)

            await this.agregar(eventoNuevo)

        } catch (error) {
            console.log(error)
        }

        return eventoNuevo
    }

    async agregar(eventoNuevo) {
        this.eventosDAO.add(eventoNuevo)
    }

    //----Agregar un Invitado----

    async agregarInvitadoAEvento(idEvento,nombreInvitado,contactoInvitado){
        
        try {
            
            evento = await this.eventosDAO.getById(idEvento)

            invitadoNuevo = {id:"",idEvento:idEvento,nombre:nombreInvitado,contacto:contactoInvitado}
            await validarInvitado(invitadoNuevo)
            await this.agregar(invitadoNuevo)

            let mensaje = "Ha sido invitado al evento "+evento.nombre+" el dia..."
            
            notificar(contactoInvitado,mensaje)

        } catch (error) {
            console.log(error)
        }

    }


    //----Ver distancia del Evento  y  Confirmar Asistencia----

    async verDistancia(idInvitado){
        try {
            
            let evento = this.eventosDAO.getById(invitado.getIdEvento())

            let distancia = calcularDistancia(evento.getDireccion());
            console.log('La distancia al evento es de: '+distancia+' metros')

        } catch (error) {
            console.log(error)
        }
    }

    async confirmarAsistencia(idInvitado){
        try {

            let invitado = this.invitadosDAO.getById(idInvitado)
            invitado.confirmarAsistencia()

        } catch (error) {
            console.log(error)
        }
        

    }
}