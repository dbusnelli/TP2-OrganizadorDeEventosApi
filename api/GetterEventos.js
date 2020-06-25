class GetterEventos {
    constructor(eventosDAO) {
        this.eventosDAO = eventosDAO
    }

    obtenerTodos() {
        try {
            this.eventosDAO.getAll()
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export {
    GetterEventos
}