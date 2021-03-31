const models = require("../db/models");
const posts = models.Posts;
const threads = models.Threads;

exports.indexAlrt = async (req, res) => {
    return res.status(200).json([
        {
            msg: 'this is post comrede',
            msgReturn: 'you want to see all the post ?',
            msgCoution: 'i am sorry you are not my users'
        }
    ]);
}

exports.storePost = async (req, res) => {
    const data = {
        title: req.body.title,
        descrip: req.body.descrip,
        url: req.body.url,
        UserId: req.user.id
    }
    try{
        posts.create(data)
        .then( submit => {
            const threads_data = {
                like: 0,
                share: 0,
                PostId: submit.id
            }
            try {
                threads.create(threads_data)
                .then( result => res.status(201)
                    .send({
                        status: 201,
                        msg: `Post Created`,
                        datas: submit
                    })
                )
            } catch (error) {
                
            }
        })
    } catch ( err ){
        console.log(err.toString());
        res.status(500).send(err);
    }
}

exports.getAllPost = async (req, res) => {
    try{
        posts.findAll({
            include: [
                {
                    model: Users,
                }
            ]
        })
        .then( posts => res.status(200)
            .send({
                status: 200,
                msg: 'get all data success',
                datas: posts
            })
        )
    } catch (err){
        res.status(500).send({
            msg: "error retrieving tutorial with id"
        });
    }
}

exports.getPostById = async (req, res) => {
    let id = req.params.id
    try{
        posts.findByPk(id)
        .then( posts => res.status(200)
            .send({
                status: 200,
                msg: 'get all data success',
                datas: posts
            })
        )
    } catch (err){
        console.log(err.toString());
        res.status(400).send(err);
    }
}

exports.updatedPost = async (req, res) => {
    let id = req.params.id
    try{
        posts.update(req.body, {
            where: { id: id }
        }).then(num => {
            if (num == 1){
                res.send({
                    msg: "post updated"
                });
            }else{
                res.send({
                    msg: `can't updated your post ${id}`
                });
            }
        }).catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
              });
        })
    } catch (err){
        console.log(err.toString());
        res.status(400).send(err);
    }
}

