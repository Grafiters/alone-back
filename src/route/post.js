const { Router } = require('express');
const PostRouter = new Router();

const {
    indexAlrt,
    storePost,
    getPostById,
    updatedPost,
} = require('../controller/post');

PostRouter.get('/', indexAlrt)
            .get('/:id', getPostById)
            .put('/:id', updatedPost)
            .post('/', storePost);

module.exports = PostRouter;