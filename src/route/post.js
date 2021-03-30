const { Router } = require('express');
const PostRouter = new Router();
const auth = require('../concern/middleware/jwtMiddleware')

const {
    indexAlrt,
    storePost,
    getAllPost,
    getPostById,
    updatedPost,
} = require('../controller/post');

PostRouter.get('/', auth, indexAlrt)
            .get('/all', getAllPost)
            .get('/:id', getPostById)
            .put('/:id', updatedPost)
            .post('/', auth, storePost);

module.exports = PostRouter;