import validarEvento from '../validaciones/eventos'
import EventosDAO from '../data/eventosDAO'
import InvitadosDAO from '../data/invitadosDAO'


import notificar from './handlerEventos/notificador'
import calcularDistancia from './handlerEventos/calculoDistancia'


import Evento from '../models/evento'
import Invitado from '../models/invitado'



class EventosApi {
    eventosDAO = new EventosDAO()
    invitadosDAO = new InvitadosDAO()

    //----Agregar un Evento----

    async crearEvento(nombre,direccion,fecha,creador,contacto){
        
        try {

            let id = this.eventosDAO.getNuevoID()

            eventoNuevo = new Evento(id,nombre,direccion,fecha,creador,contacto)
            await validarEvento(eventoNuevo)

            await this.agregar(eventoNuevo)

        } catch (error) {
            console.log(error)
        }

        return eventoNuevo
    }

    async #agregar(eventoNuevo) {
        this.eventosDAO.add(eventoNuevo)
    }

    //----Agregar un Invitado----

    async agregarInvitadoAEvento(idEvento,nombreInvitado,contactoInvitado){
        
        try {
            
            evento = await this.eventosDAO.getById(idEvento)

            let id = this.invitadosDAO.getNuevoID()
            invitadoNuevo = await new Invitado(id,idEvento,nombreInvitado,contactoInvitado)
            await validarInvitado(invitadoNuevo)
            await this.agregar(invitadoNuevo)

            let mensaje = evento.toString()

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