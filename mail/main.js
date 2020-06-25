const Mail = require('./mail.js')
const leer = require('./leer.js')


const mail = new Mail(leer('./auth/direcci.on'),leer('./auth/pa.ss'))

function enviarMail(contacto,asunto,mensaje){
    mail.send(contacto,asunto,mensaje)
}

export {
    enviarMail
}
