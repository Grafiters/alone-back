const { Router} = require("express");
const MainRouter = new Router();

const UserRouter = require('./user.js');
const AuthRouter = require('./auth.js');
const PostRouter = require('./post.js');

MainRouter.use('/user', UserRouter);
MainRouter.use('/auth', AuthRouter);
MainRouter.use('/post', PostRouter);

module.exports = MainRouter;