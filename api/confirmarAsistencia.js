export default class ConfirmarAsistencia{
    constructor(invitadosDAO){
        this.invitadosDAO = invitadosDAO
    }
    confirmar(idInvitado,urlConfirmacion){
        if(!urlConfirmacion){
            this.invitadosDAO.eliminarInvitado(idInvitado)
        }
    }
}