const Mail = require('./mail')

const mail = new Mail('grupo.cuatro.tp1@gmail.com','grupo4tp1')

module.exports = (contacto,asunto,mensaje) => {
    mail.send(contacto,asunto,mensaje)
}