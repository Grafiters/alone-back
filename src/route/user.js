const { Router } = require('express');
const {
    indexTry,
} = require('../controller/user');
const UserRouter = new Router();

UserRouter.get('/', indexTry);

module.exports = UserRouter;