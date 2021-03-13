const bcrypt = require('bcrypt');
const user = require("../db/models");
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const { name, password } = req.body;
    console.log(name, password)
    const uslog = user.User;
    const result = await uslog.findOne({
        where: { 
            name
        }
    });

    if(!result){
        throw Error('user not found');
    }

    if(bcrypt.compareSync(password, result.password)){
        const token = jwt.sign({ name }, "/\()*alone123*()#", {
            expiresIn: "24h"
        });

        res.json({
            token,
            msg: "login success"
        })
    }else{
        res.status(401).json({
            message: "Unauthenticated"
        });
    }
}