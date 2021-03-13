const { Router} = require("express");
const MainRouter = new Router();

const UserRouter = require('./user.js');
const AuthRouter = require('./auth.js');

MainRouter.use('/user', UserRouter);
MainRouter.use('/auth', AuthRouter);

module.exports = MainRouter;