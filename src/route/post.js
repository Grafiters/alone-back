const { Router } = require('express');
const PostRouter = new Router();

const {
    indexAlrt,
    storePost,
} = require('../controller/post');

PostRouter.get('/', indexAlrt)
            .post('/', storePost);

module.exports = PostRouter;