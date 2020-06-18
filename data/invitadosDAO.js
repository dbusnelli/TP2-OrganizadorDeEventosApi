class InvitadosDAO {

    constructor() {
        invitados = []
        proxId = 0
    }

    async agregar(nuevoInvitado) {
        this.proxId++
        nuevoInvitado.id = this.proxId
        this.invitados.push(nuevoInvitado)
        return nuevoInvitado
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

    async getNuevoID(){
        return proxId
    }

}

export {
    InvitadosDAO
}