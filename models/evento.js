class Evento {

    constructor(id, nombre, direccion, fecha, creador, contacto) {
        this.id = id
        this.nombre = nombre
        this.direccion = direccion
        this.fecha = fecha
        this.creador = creador
        this.contacto = contacto
    }

    getId(){
        return this.id
    }

    getDireccion(){
        return this.direccion
    }

    getContacto(){
        return this.contacto
    }

    hasThisId(id) {
        return this._id == id
    }

    toString(){
        return this.creador+' lo ha invitado al evento '
        +this.nombre+'; el dia, '+this.fecha+'. Contactelo a este mail: '
        +this.contacto+'. '
    }
}

export {
    Evento
}