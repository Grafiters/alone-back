const bcrypt = require('bcrypt');
const models = require("../db/models");
const user = models.Users;

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
    // const pass = await bcrypt.hash(req.body.password, 10);
    const data_user = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
        admin: req.body.admin
    }
    try{
        user.create(data_user)
        .then(submit => res.status(200)
            .send({
                status: 200,
                msg: 'store success comrede',
                data: submit
            })
        )
    } catch ( err ){
        console.log(err.toString());
        res.status(500).json({
            msg: err
        });
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