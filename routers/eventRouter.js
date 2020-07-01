import express from 'express'
import {EventosApi} from '../api/eventosApi.js'

function getEventRouter() {
    const eventosApi = new EventosApi()
    const router = express.Router()

    router.post('/', async (req, res) => {
        const nuevoEvento = req.body
        console.log(nuevoEvento)
        try {
            const evento = await eventosApi.crearEvento(nuevoEvento)
            res.status(201).json(evento)
        } catch (err) {
            res.status(err.status).json(err)
        }
    })

    router.get('/', async (req, res) => {
        try {
            const eventos = await eventosApi.getAll()
            res.status(200).json(eventos)
        } catch (err){
            res.status(err.status).json(err)
        }
    })

    router.post('/:id/invitados', async (req, res) => {
        const nuevoInvitado = req.body

        try {
            //const invitado = await eventosApi.agregarInvitado(nuevoInvitado, req.params.id)
            res.status(201).json(invitado)
        } catch (err) {
            res.status(err.status).json(err)
        }
    })

    router.put('/:idEvento/invitados/:idInvitado', async(req, res) => {
        try {
            await eventosApi.confirmarAsistencia(req.params.idInvitado)
            res.status(200).send()
        } catch (err) {
            res.status(err.status).json(err)
        }
    })

    router.delete('/:id', async (req, res) => {
        try {
            await eventosApi.eliminar(req.params.id)
            res.status(204).send()
        } catch (err) {
            res.status(err.status).json(err)
        }

    })
    return router
}

export {
    getEventRouter
}