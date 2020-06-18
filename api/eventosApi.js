import validarEvento from '../validaciones/eventos'
import EventosDAO from '../data/eventosDAO'
class EventosApi {
    eventosDAO = new EventosDAO()

    async agregar(eventoNuevo) {
        validarEvento(eventoNuevo)
        const eventoAgregado = await this.eventosDAO.add(eventoNuevo)
        return estuAgregado
    }
}