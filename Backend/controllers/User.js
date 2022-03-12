const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');


exports.register = async (req, res, next) => {
    const {
        pseudo,
        email
    } = req.body

    try {
        const salt = await bcrypt.genSalt(2);
        const password = await bcrypt.hash(req.body.password, salt);
        const userItem = new User ({
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
    User.findOne({
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


exports.getOneUser = (req, res) => {
    User.findOne({
            where: {     
               id: req.user.id
            }
        }).then(post => res.status(200).json(post))
        .catch(error => res.status(500).json(error))
}

exports.destroyUser = (req,res, next) => {
    User.findOne({
        id: req.body.id
    })
    .then(user => {
            user.destroy()
            .then(() => res.status(200).json({
                message: 'Utilisateur supprimé !'
            }))
    })
    .catch(error => res.status(400).json({
        message: 'Mauvaise requête !'
    }));
}


exports.putUser = (req,res, next) => {
         
        User.update({
            email: req.body.email,
        pseudo: req.body.pseudo
        }, {where: 
            { id: req.user.id }
        })
        .then(() => res.status(200).json({
            message: 'Utilisateur modifié !'
        }))
        .catch(error => res.status(400).json({
            message: 'Mauvaise requête putUser !'
        }))
        
}