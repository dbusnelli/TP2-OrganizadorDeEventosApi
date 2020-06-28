class CrearEvento {
    constructor(eventosDAO, eventValidator) {
        this.eventosDAO = eventosDAO
        this.eventValidator = eventValidator
    }

    async run(evento) {
        try {
            this.eventValidator.validar(evento)
            return await this.eventosDAO.agregar(evento)
        } catch (error) {
            throw {status: 500, message: error.message}
        }
    }
}

export {
    CrearEvento
}