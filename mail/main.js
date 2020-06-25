const Mail = require('./mail.js')
const leer = require('./leer.js')


const mail = new Mail(leer('./auth/direcci.on'),leer('./auth/pa.ss'))

function enviarMail(contacto,mensaje){
    mail.send(contacto,'INVITACION A EVENTO!!',mensaje)
}

export {
    enviarMail
}