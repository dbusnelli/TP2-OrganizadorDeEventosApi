import { notificar } from '../mail/send.js'

async function eliminarEvento(eventosDAO,invitadosDAO,idEvento){
    try {
        let evento = await eventosDAO.getById(idEvento)
        eventosDAO.EliminarEvento(idEvento)
        
        let invitados = invitadosDAO.getByIdEvento(idEvento)

        if (invitados.length > 0) {
            notificarEventoCancelado(invitados,evento)
            invitados.forEach(invitado => {
                invitadosDAO.eliminarInvitado(invitado.id)
            });
        }
    
    } catch (error) {
        throw error
    }
}

async function notificarEventoCancelado(invitados,evento){
    
    let mensaje = "El evento "+evento.nombre+" del dia: "+evento.fecha+". Ha sido cancelado."
    const asunto = "Evento cancelado"
    invitados.forEach(invitado => {
        notificar(invitado.contacto,asunto,mensaje)
    });
}

export {
    eliminarEvento
}