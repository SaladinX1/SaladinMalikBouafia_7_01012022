const router = require('express').Router();
const postCtrl = require('../controllers/Post');
const commentCtrl = require('../controllers/Comments');
const multer = require('../middlewares/multer');


//routes pour le CRUD des posts

router.get('/', postCtrl.getAllPosts);
router.get('/:id', postCtrl.getOnePost);
router.post('/', multer, postCtrl.createPost);
router.put('/:id', multer, postCtrl.updatePost);
router.delete('/:id', postCtrl.deletePost);
router.patch('/:id/like-unlike-post', postCtrl.likeUnlikePost);

//routes pour les commentaires

router.get('/:id/comments', commentCtrl.getComment);
router.post('/:id/comments', commentCtrl.createComment);


module.exports = router;