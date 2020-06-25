import express from 'express'

import { getEventRouter } from './routers/eventRouter.js'

const app = express()

app.use(express.json())
app.set('json spaces', 4)

app.use('/eventos', getEventRouter())

const PORT = process.env.PORT

const server = app.listen(PORT, () => {
    console.log(`listening on port ${server.address().port}`)
})