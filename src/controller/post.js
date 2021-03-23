const post = require("../db/models");
const P_record = post.Posts;

exports.indexAlrt = async (req, res) => {
    return res.status(200).json([
        {
            msg: 'this is post comrede',
            msgReturn: 'you want to see all the post ?',
            msgCoution: 'i am sorry you are not my admin'
        }
    ]);
}

exports.storePost = async (req, res) => {
    const data = {
        title: req.body.title,
        descrip: req.body.descrip,
        url: req.body.url,
    }
    try{
        P_record.create(data)
        .then( submit => res.status(201)
            .send({
                status: 200,
                msg: 'store success comrede',
            })
        )
    } catch ( err ){
        console.log(err.toString());
        res.status(500).send(err);
    }
}

exports.getAllPost = async (req, res) => {
    try{
        P_record.findAll()
        .then( posts => res.status(200)
            .send({
                status: 200,
                msg: 'get all data success',
                datas: posts
            })
        )
    } catch (err){
        res.status(500).send({
            msg: "error retrieving tutorial with id = " + id
        });
    }
}

exports.getPostById = async (req, res) => {
    let id = req.params.id
    try{
        P_record.findByPk(id)
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
        P_record.update(req.body, {
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