const Mail = require('./mail.js')
const leer = require('./leer.js')
const random = require('./random.js')

const mail = new Mail(leer('./auth/direcci.on'),leer('./auth/pa.ss'))
mail.send(leer('./auth/direcci.on'),random(1,100),'como estas')