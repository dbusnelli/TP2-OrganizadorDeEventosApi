class InvitadosDAO {

    constructor() {
        this.invitados = []
        this.proxId = 0
    }

    async agregar(nuevoInvitado) {
        this.proxId++
        nuevoInvitado.id = this.proxId
        this.invitados.push(nuevoInvitado)
        return nuevoInvitado
    }

    async eliminarInvitado(id){
        const index = this.invitados.findIndex(e => e.id == id)
        if(index == -1){
            throw {status: 400, message: 'invitado para eliminar no encontrado con id ' + id}
        }

        eventos.splice(index,1)
    }

    async getByIdEvento(idEvento){
        const buscados = this.invitados.filter(e => e.idEvento == idEvento)
        return buscados
    }

    async getAll(){
        return invitados
    }

    async getById(id) {
        const buscado = this.invitados.find(e => e.id == id)
        if (!buscado) {
            throw {status: 400, message: 'invitado no encontrado con id ' + id}
        }
        return [buscado]
    }

}

export {
    InvitadosDAO
}