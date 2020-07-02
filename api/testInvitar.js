import {Invitacion} from './invitar.js'
import eventosDAO from '../data/eventosDAO.js'
import invitadosDAO from '../data/invitadosDAO.js'
import sendMail from '../mail/send.js'
import validacionesInvitados from '../validaciones/invitados.js'
const f = new Invitacion(eventosDAO,invitadosDAO,sendMail,validacionesInvitados)
f.enviarInvitacion(0,'gabriel','gabrielsbadenas@gmail.com')
console.log(f)
//const invitacion = new Invitacion(eventosDAO,invitadosDAO,sendMail,validacionesInvitados)
//new Invitacion(eventosDAO,invitadosDAO,sendMail,validacionesInvitados);
//invitacion.enviarInvitacion(0,'gabriel','gabrielsbadenas@gmail.com').catch(console.error);
/*
const f = new Invitacion()
f.setter(eventosDAO,invitadosDAO,sendMail,validacionesInvitados)
console.log(f)
dEvento,nombreInvitado,contactoInvitado
*/