const jwt = require('jsonwebtoken');

const authJWT = (req, res, next) => {
    const token = req.headers['x-access-token']

    jwt.verify(token, "/\()*alone123*()#", (err, decoded) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = decoded;
        next();
    })

    // if(authHeader){
    //     const token = authHeader.split(' ')[1];

        
    // }else{
    //     res.sendStatus(401);
    // }
}

module.exports = authJWT;