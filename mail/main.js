const Mail = require('./mail.js')
const leer = require('./leer.js')
const random = require('./random.js')


static var  mail = new Mail(leer('./auth/direcci.on'),leer('./auth/pa.ss'))

function enviarMail(contacto,mensaje){
    mail.send(contacto,random(1,100),mensaje)
}

export {
    enviarMail
}