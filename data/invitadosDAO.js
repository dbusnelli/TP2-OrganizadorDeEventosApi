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
        const index = invitados.findIndex(e => e.id == id)
        if(index == -1){
            throw 'evento para eliminar no encontrado con id ' + id
        }

        eventos.splice(index,1)
    }

    async getByIdEvento(idEvento){
        const buscados = invitados.filter(e => e.idEvento == idEvento)
        if(buscados.length == 0){
            throw 'no se encontraron invitados para el evento con id ' + id
        }
        return buscados
    }

    async getAll(){
        return invitados
    }

    async getById(id) {
        const buscado = invitados.find(e => e.id == id)
        if (!buscado) {
            throw 'invitado no encontrado con id ' + id
        }
        return [buscado]
    }

}

export default{
    InvitadosDAO
}