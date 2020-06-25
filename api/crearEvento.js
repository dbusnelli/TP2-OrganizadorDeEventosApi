class CrearEvento {
    constructor(eventosDAO, eventValidator) {
        this.eventosDAO = eventosDAO
        this.eventValidator = eventValidator
    }

    run(evento) {
        try {
            this.eventValidator(evento)
            this.eventosDAO.agregar(evento)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export {
    CrearEvento
}