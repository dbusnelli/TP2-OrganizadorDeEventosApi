class GetterEventos {
    constructor(eventosDAO) {
        this.eventosDAO = eventosDAO
    }

    async obtenerTodos() {
        try {
            return await this.eventosDAO.getAll()
        } catch (error) {
            throw {status: 500, message: error.message}
        }
    }
}

export {
    GetterEventos
}