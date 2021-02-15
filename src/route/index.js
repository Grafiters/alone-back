const { Router} = require("express");
const MainRouter = new Router();

const UserRouter = require('./user');

MainRouter.use('/user', UserRouter);

module.exports = MainRouter;