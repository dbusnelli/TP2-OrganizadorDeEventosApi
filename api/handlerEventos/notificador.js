import enviarMail from '../../mail/main'

function notificar(contacto,mensaje){
    enviarMail(contacto,mensaje)
}