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
    const ObjPost = JSON.parse(req.body.post);

    const postItem = new Sauce({
        ...ObjPost,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersDisliked: []
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

}

module.exports.likeUnlikePost = (req, res) => {




}



//module comments

module.exports.commentPost = (req, res) => {

}

module.exports.editCommentPost = (req, res) => {

}

module.exports.deleteCommentPost = (req, res) => {

}