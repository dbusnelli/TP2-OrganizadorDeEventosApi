import notificar from '../mail/send.js'

class EliminarEvento {

    constructor(eventosDAO, invitadosDAO) {
        this.eventosDAO = eventosDAO,
        this.invitadosDAO = invitadosDAO
    }

    async eliminar(idEvento) {
        try {
            let evento = await this.eventosDAO.getById(idEvento)
            await this.eventosDAO.eliminarEvento(idEvento)

            let invitados = await this.invitadosDAO.getByIdEvento(idEvento)

            if (invitados.length > 0) {
                await notificarEventoCancelado(invitados, evento)
                await invitados.forEach(invitado => {
                    this.invitadosDAO.eliminarInvitado(invitado.id)
                });
            }

        } catch (error) {
            throw {status: 500, message: error.message + error}
        }
    }

    async  notificarEventoCancelado(invitados, evento) {

        let mensaje = "El evento " + evento.nombre + " del dia: " + evento.fecha + ". Ha sido cancelado."
        const asunto = "Evento cancelado"
        invitados.forEach(invitado => {
            notificar(invitado.contacto, asunto, mensaje)
        });
    }

}

export {
    EliminarEvento
}