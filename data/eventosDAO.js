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
        const index = this.eventos.findIndex(e => e.id == id)
        if(index == -1){
            throw {status: 404, message: 'evento para eliminar no encontrado con id ' + id}
        }

        this.eventos.splice(index,1)
    }

    async getAll(){
        return this.eventos
    }

    async getById(id) {
        const buscado = this.eventos.find(e => e.id == id)
        if (!buscado) {
            throw {status: 404, message: 'evento no encontrado con id ' + id}
        }
        return [buscado]
    }

}

export {
    EventosDAO
}