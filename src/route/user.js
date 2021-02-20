const { Router } = require('express');
const UserRouter = new Router();

const {
    indexAlrt,
    getAllUser,
    storeUser,
} = require('../controller/user');

UserRouter.get('/', indexAlrt)
    .post('/reg', storeUser)
    .get('/human', getAllUser);

module.exports = UserRouter;