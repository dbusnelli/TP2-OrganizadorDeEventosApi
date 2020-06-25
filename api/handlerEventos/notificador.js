import enviarMail from '../../mail/send.js'

module.exports = (contacto,asunto,mensaje) => {
    enviarMail(contacto,asunto,mensaje)
}