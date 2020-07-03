import Invitacion from '../api/invitar.js'
import send from '../mail/send.js'
import validarInvitados from '../validaciones/invitados.js'

const eventosDAO = {
    getById: function(idEvento=0){
        return {
            creador: 'gabriel',
            nombre: 'cumpleaños',
            fecha: '11-6',
            direccion: 'nazca 2000'
        }
    }
}
const invitadosDAO = {
    invitados: [],
    agregar: function(invitadoNuevo){
        this.invitados.push(invitadoNuevo)
    }
}
function testCrearInvitacion(){
    try{
        const i = new Invitacion(eventosDAO, invitadosDAO, send, validarInvitados)
        const x = i.enviarInvitacion({
            idEvento:'0',
            nombre:'gabriel',
            contacto:'gabrielsbadenas@gmail.com'
        })
        const f = i.generarMensaje('gabriel',eventosDAO.getById())
        console.log(f,x)
    }catch(error){
        console.log(error)
    }
}
testCrearInvitacion()