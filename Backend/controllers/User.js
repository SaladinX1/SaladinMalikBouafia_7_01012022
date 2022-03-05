const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/User');
const timeLimit = 3 * 24 * 60 * 60 * 1000;

exports.register = async (req, res, next) => {
    const {
        pseudo,
        email
    } = req.body

    try {
        const salt = await bcrypt.genSalt(2);
        const password = await bcrypt.hash(req.body.password, salt);
        const userItem = new userModel({
            pseudo,
            email,
            password
        });
        userItem.save()
            .then(res.status(201).json({
                message: 'User created ! congratulations and welcome 😃 !'
            }))
            .catch(error => console.log(error));
    } catch (err) {
        res.status(400).send({
            err
        })
    }
};

exports.login = (req, res, next) => {
    userModel.findOne({
        where: {     
           email: req.body.email
        }
    }
        )  
        .then(user => {
            if (!user) {  
               
                return res.status(401).json({
                   message : 'Utilisateur non trouvé !'
                });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {       
                        return res.status(401).json({
                            message : 'Mot de passe incorrect !'
                        });
                    }
                    res.status(200).json({
                        userId: user.id,
                        token: jwt.sign({
                            userId: user.id
                        }, 'SECRET_TOKEN', {
                            expiresIn: '24h'
                        })
                    })
                })
                .catch(error => res.status(500).json({
                    error
                }));
        })
        .catch(error => res.status(500).json({
            error
        }));
}

