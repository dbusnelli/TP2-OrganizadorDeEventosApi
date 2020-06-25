class EventosDAO {

    constructor() {
        this.eventos = []
        this.proxId = 0
    }

    async agregar(nuevoEvento) {
        this.proxId++
        nuevoEvento.id = this.proxId
        this.eventos.push(nuevoEvento)
        return nuevoEvento
    }

    async eliminarEvento(id){
        const index = eventos.findIndex(e => e.id == id)
        if(index == -1){
            throw 'evento para eliminar no encontrado con id ' + id
        }

        eventos.splice(index,1)
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

}

export {
    EventosDAO
}