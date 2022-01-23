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

}



module.exports.updatePost = (req, res) => {

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