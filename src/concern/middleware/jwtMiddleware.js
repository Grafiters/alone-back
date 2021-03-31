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
}

module.exports = authJWT;