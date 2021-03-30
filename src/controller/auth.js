const bcrypt = require('bcrypt');
const user = require("../db/models");
const jwt = require('jsonwebtoken');
const uslog = user.User;

exports.login = async (req, res) => {
    const { name, password } = req.body;
    const result = await uslog.findOne({
        where: { 
            name
        }
    });

    if(!result){
        throw Error('user not found');
    }

    let id = result.id

    if(bcrypt.compareSync(password, result.password)){
        const token = jwt.sign({ id }, "/\()*alone123*()#", {
            expiresIn: "24h"
        });

        res.json({
            status: 200,
            msg: "login success",
            data:{
                user: result,
                token: token,
            }
        })
    }else{
        res.status(401).json({
            message: "Unauthenticated"
        });
    }
}