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

exports.getAllUser = async (req, res) => {
    try{
        U_record.findAll()
        .then( users => res.status(200)
            .send({
                status: 200,
                msg: 'get all data success',
                datas: users
            })
        )
    } catch (err){
        console.log(err.toString());
        res.status(400).send(err);
    }
}