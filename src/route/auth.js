const { Router } = require('express');
const AuthRouter = new Router();

const {
    login,
    prof
} = require('../controller/auth');

AuthRouter.post('/', login);

module.exports = AuthRouter;