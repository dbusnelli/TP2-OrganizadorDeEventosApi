import {validarEvento} from '../validaciones/eventos.js'
import {validarInvitado} from '../validaciones/invitados.js'

import {notificar} from './handlerEventos/notificador.js'
import {calcDistancia} from './handlerEventos/calculoDistancia.js'
import {eliminarEvento} from './eliminarEvento.js'
import {CrearEvento} from './crearEvento.js'


class EventosApi {
    constructor(eventosDAO, invitadosDAO) {
        this.eventosDAO = eventosDAO
        this.invitadosDAO = invitadosDAO
        this.creadorEventos = new CrearEvento(eventosDAO, validarEvento)
    }

    async crearEvento(evento){ 
        //eventoNuevo = {id:"",nombre:nombre,direccion:direccion,fecha:fecha,creador:creador,contacto:contacto}
        this.creadorEventos.run(evento)
    }

    async eliminar(idEvento) {
        eliminarEvento(this.eventosDAO, this.invitadosDAO, idEvento)
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

            let distancia = calcDistancia(evento.getDireccion());
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

export {
    EventosApi
}