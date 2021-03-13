const { Router } = require('express');
const UserRouter = new Router();
const auth = require('../middleware/jwtMiddleware')


const {
    indexAlrt,
    getAllUser,
    storeUser,
} = require('../controller/user');

UserRouter.get('/', auth, indexAlrt)
    .post('/reg', storeUser)
    .get('/human', auth, getAllUser);

module.exports = UserRouter;