const { Router } = require('express')
const auth = require('../concern/middleware/jwtMiddleware')
const RepRouter = new Router()

const {
    indexAlrt,
    repThreads
} = require('../controller/replies')

RepRouter.get('/', auth, indexAlrt)
            .post('/q=:id', auth, repThreads)

module.exports = RepRouter