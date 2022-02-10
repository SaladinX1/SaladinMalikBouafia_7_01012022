const commentModel = require('../models/Comment');


module.exports.createComment = (req, res) => {

    const commentItem = new commentModel({
        //picture: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        message: req.body.message
    });
    commentItem.save()
        .then(res.status(201).json({
            message: 'Commentaire posté !'
        }))
}


module.exports.getComment = (req, res) => {
    commentModel.findAll()
        .then(comments => res.status(200).json(comments))
        .catch(error => res.status(400).json({
            message: error
        }))
}


module.exports.updateComment = (req, res) => {
    commentModel.update({
            message: req.body.message
        }, {
            where: {
                id: req.params.id
            }
        }).then(comment => res.status(200).json(comment))
        .catch(error => res.status(500).json(error))
}


module.exports.deleteComment = (req, res) => {
    commentModel.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.status(200).json({
            message: 'Commentaire supprimé !'
        }))
        .catch(error => res.status(400).json({
            message: 'Mauvaise requête !'
        }));
}