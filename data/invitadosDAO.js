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
        return eventos
    }

    async getById(id) {
        const buscado = eventos.find(e => e.id == id)
        if (!buscado) {
            throw 'evento no encontrado con id ' + id
        }
        return [buscado]
    }

    async getNuevoID(){
        return this.eventos.length
    }

}

export {
    InvitadosDAO
}