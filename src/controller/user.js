const user = require("../db/models");
const U_record = user.User;

exports.indexAlrt = async (req, res) => {
    return res.status(200).json([
        {
            alerts: 'who are you man',
            msg1: 'you want to join as member ?',
            msg2: 'just call me',
            contact: '@Grafiters',
            endmsg: 'you are not alone comrede'
        }
    ]);
}

exports.storeUser = async (req, res) => {
    const data = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: req.body.password
    }
    try{
        U_record.create(data)
        .then( submit => res.status(201)
            .send({
                status: 200,
                msg: 'get all data success',
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