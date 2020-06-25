import enviarMail from '../../mail/send.js'

async function notificar (contacto,asunto,mensaje) {
    enviarMail(contacto,asunto,mensaje)
}

export {
    notificar
}