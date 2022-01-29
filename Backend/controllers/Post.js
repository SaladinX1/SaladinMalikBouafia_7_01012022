const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');
const fs = require('fs');


module.exports.getAllPosts = (req, res) => {
    Post.findAll()
        .then(products => res.status(200).json(products))
        .catch(error => res.status(400).json({
            message: error
        }))
}



module.exports.createPost = (req, res) => {

    const postItem = new Post({

        // imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        message: req.body.message


    });
    postItem.save()
        .then(res.status(201).json({
            message: 'Post crée !'
        }))
}



module.exports.updatePost = (req, res) => {
    const ObjPost = req.file ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {
        ...req.body
    };
    Post.updateOne({
            id: req.params.id
        }, {
            ...ObjPost,
            id: req.params.id
        })
        .then(() => res.status(200).json({
            message: 'Post modifié !'
        }))
        .catch(error => res.status(400).json({
            message: 'Muvaise requête !'
        }));
}

module.exports.deletePost = (req, res) => {
    Post.findOne({
            id: req.params.id
        })
        .then(post => {
            const filename = post.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Post.deleteOne({
                        id: req.params.id
                    })
                    .then(() => res.status(200).json({
                        message: 'Objet supprimé !'
                    }))
            });
        })
        .catch(error => res.status(500).json({
            message: 'Erreur serveur !'
        }));
}

module.exports.likeUnlikePost = (req, res) => {

    let like = req.body.like
    let userId = req.body.userId
    let posterId = req.params.id

    switch (like) {
        case 1:
            Post.updateOne({
                    id: posterId
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
            Post.findOne({
                    id: posterId
                })
                .then((post) => {
                    if (post.usersLiked.includes(userId)) {
                        Post.updateOne({
                                id: posterId
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
                        Post.updateOne({
                                id: sauceId
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
            Post.updateOne({
                    id: posterId
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



//module comments

module.exports.commentPost = (req, res) => {

}

module.exports.editCommentPost = (req, res) => {

}

module.exports.deleteCommentPost = (req, res) => {

}