 //const Like = require('../models/Like');
const Post = require('../models/Post');
//const fs = require('fs');



module.exports.getAllPosts = (req, res) => {
    Post.findAll({order: [["createdAt", "DESC"]]})
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({
            message: error
        }))
}



module.exports.createPost = (req, res) => {
    const postItem = new Post({    
        UserId: req.user.id,
        message: req.body.message,
        picture: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    postItem.save()
        .then(res.status(201).json({
            message: 'Post crée !'
        }))
}

module.exports.getOnePost = (req, res) => {
    Post.findOne({
            where: {
                id: req.params.id
            }
        }).then(post => res.status(200).json(post))
        .catch(error => res.status(500).json(error))
}


module.exports.updatePost = (req, res) => {
    Post.update({
            message: req.body.message,
            picture: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        }, {
            where: 
            { id: req.params.id }
        })
        .then(() => res.status(200).json({
            message: 'Post modifié !'
        }))
        .catch(error => res.status(400).json({
            message: 'Mauvaise requête !'
        }));
}



module.exports.deletePost = (req, res) => {
    Post.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.status(200).json({
            message: 'Objet supprimé !'
        }))
        .catch(error => res.status(400).json({
            message: 'Mauvaise requête !'
        }));
}

