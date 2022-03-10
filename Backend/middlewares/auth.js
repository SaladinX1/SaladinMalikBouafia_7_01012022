const jwt = require('jsonwebtoken');
const   User = require('../models/User')

module.exports = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const VerifyToken = jwt.verify(token, 'SECRET_TOKEN');
        const userId = VerifyToken.userId;
        User.findOne({ where: {
            id: userId
        }}).then( user => {
            if (!user) {
                return res.status(401).json({
                    message: 'requête non autorisée'
                })
            } else {
                req.user = user
                next();
            }
        })  
    } catch {
        return res.status(400).json({
            error: new Error('la requête est invalide ! ')
        });

    }
}