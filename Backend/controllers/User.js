const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('@sequelize/core');
const User = require('../models/User');



exports.register = async (req, res, next) => {
    const {
        pseudo,
        email
    } = req.body

    try {
        User.findOne({
            where: {
                [Op.or]: [
                  { email: req.body.email },
                  { pseudo: req.body.pseudo }
                ]
              }
        }).then(user => {
            if(user && user.email === req.body.email) {
                res.status(400).json({ emailMessage: 'Cet email éxiste déjà, veuillez en choisir un autre, merci' }) 
            } else if (user && user.pseudo === req.body.pseudo ){
                res.status(400).json({ pseudoMessage: ' Ce pseudo éxiste déjà, veuillez en choisir un autre, merci' }) 
        }
    })
        const salt = await bcrypt.genSalt(2);
        const password = await bcrypt.hash(req.body.password, salt);
        const user = new User ({
            pseudo,
            email,
            password
        });
        user.save()
            .then(res.status(201).json({
                message: 'Utilisateur crée ! félicitations et bienvenue 😃 !'
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
                        }, 'SECRET_TOKEN_REFRESH', {
                            expiresIn: '1h'
                        }), 
                        userId: user.id 
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
