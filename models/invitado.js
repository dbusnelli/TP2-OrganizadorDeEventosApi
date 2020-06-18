class Invitado {

    constructor(id, idEvento, nombre, contacto) {
        this.id = id
        this.idEvento = idEvento
        this.nombre = nombre
        this.contacto = contacto
        this.confirmado = false
    }

    confirmarAsistencia(){
       setConfirmado()
    }

    #setConfirmado(){
        confirmado = true
    }

    getConfirmado(){
        return this.confirmado
    }

    getId(){
        return thi
    }

    getIdEvento(){
        return this.idEvento
    }

    hasThisId(id) {
        return this._id == id
    }
}

export {
    Invitado
}