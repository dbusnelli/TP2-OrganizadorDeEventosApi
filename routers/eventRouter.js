import {EventosDAO} from '../data/eventosDAO.js'
import {InvitadosDAO} from '../data/invitadosDAO.js'
import express from 'express'
import {EventosApi} from '../api/eventosApi.js'

function getEventRouter() {
    const eventosDAO = new EventosDAO()
    const invitadosDAO = new InvitadosDAO()
    const eventosApi = new EventosApi(eventosDAO, invitadosDAO)
    const router = express.Router()

    router.post('/', async (req, res) => {
        console.log("posteaste")
        const nuevoEvento = req.body

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
        } catch {
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