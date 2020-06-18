class EventosDAO {

    constructor() {
        eventos = []
        proxId = 0
    }

    async agregar(nuevoEvento) {
        this.proxId++
        nuevoEvento.id = this.proxId
        this.eventos.push(nuevoEvento)
        return nuevoEvento
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
        return proxId
    }

}

export {
    EventosDAO
}