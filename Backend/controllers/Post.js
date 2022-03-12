 //const Like = require('../models/Like');
const Post = require('../models/Post');
//const fs = require('fs');



module.exports.getAllPosts = (req, res) => {
    Post.findAll()
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
            { id: req.user.id }
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



module.exports.likeDislikePost = (req, res) => {

    let like = req.body.like
    let userId = req.body.userId
    let postId = req.params.id

    switch (like) {
        case 1:
            Like.updateOne({
                    id: postId
                }, {
                    $push: {
                        usersLiked: userId
                    },
                    $inc: {
                        likes: +1
                    }
                })
                .then(() => res.status(200).json({
                    message: `J'aime`
                }))
                .catch((error) => res.status(400).json({
                    error
                }))

            break;

        case 0:
            Like.findOne({
                    id: postId
                })
                .then((post) => {
                    if (post.usersLiked.includes(userId)) {
                        Like.updateOne({
                                id: postId
                            }, {
                                $pull: {
                                    usersLiked: userId
                                },
                                $inc: {
                                    likes: -1
                                }
                            })
                            .then(() => res.status(200).json({
                                message: `Neutre`
                            }))
                            .catch((error) => res.status(400).json({
                                error
                            }))
                    }
                    if (post.usersDisliked.includes(userId)) {
                        Like.updateOne({
                                id: postId
                            }, {
                                $pull: {
                                    usersDisliked: userId
                                },
                                $inc: {
                                    dislikes: -1
                                }
                            })
                            .then(() => res.status(200).json({
                                message: `Neutre`
                            }))
                            .catch((error) => res.status(400).json({
                                error
                            }))
                    }
                })
                .catch((error) => res.status(404).json({
                    error
                }))
            break;

        case -1:
            Like.updateOne({
                    id: postId
                }, {
                    $push: {
                        usersDisliked: userId
                    },
                    $inc: {
                        dislikes: +1
                    }
                })
                .then(() => {
                    res.status(200).json({
                        message: `Je n'aime pas`
                    })
                })
                .catch((error) => res.status(400).json({
                    error
                }))
            break;

        default:
            console.log(error);
    }



}