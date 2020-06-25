import enviarMail from '../../mail/main.js'

function notificar(contacto,mensaje){
    enviarMail(contacto,mensaje)
}

export{
    notificar
}