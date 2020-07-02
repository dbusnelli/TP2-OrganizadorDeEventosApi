import {ValidadorEvento} from '../validaciones/eventos.js'
import validarInvitado from '../validaciones/invitados.js'

import {notificar} from './handlerEventos/notificador.js'
import {calcDistancia} from './handlerEventos/calculoDistancia.js'
import {EliminarEvento} from './eliminarEvento.js'
import {CrearEvento} from './crearEvento.js'
import {GetterEventos} from './GetterEventos.js'
import {EventosDAO} from '../data/eventosDAO.js'
import {InvitadosDAO} from '../data/invitadosDAO.js'

class EventosApi {
    constructor() {
        this.eventosDAO = new EventosDAO()
        this.invitadosDAO = new InvitadosDAO()
        this.creadorEventos = new CrearEvento(this.eventosDAO, new ValidadorEvento())
        this.getterEventos = new GetterEventos(this.eventosDAO)
        this.eliminarEvento = new EliminarEvento(this.eventosDAO, this.invitadosDAO)
    }

    async crearEvento(evento){ 
        return await this.creadorEventos.run(evento)
    }

    async eliminar(idEvento) {
        await this.eliminarEvento.eliminar(idEvento)
    }

    async getAll() {
        return await this.getterEventos.obtenerTodos()
    }



    //----Agregar un Invitado----

    async agregarInvitadoAEvento(idEvento,nombreInvitado,contactoInvitado){
        
        try {
            
            evento = await this.eventosDAO.getById(idEvento)

            invitadoNuevo = {id:"",idEvento:idEvento,nombre:nombreInvitado,contacto:contactoInvitado}
            await validarInvitado(invitadoNuevo)
            await this.agregar(invitadoNuevo)

            let mensaje = "Ha sido invitado al evento "+evento.nombre+" el dia..."
            
            notificar(contactoInvitado,'invitación a evento',mensaje)

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