const router = require('express').Router();
const postCtrl = require('../controllers/Post');
const commentCtrl = require('../controllers/Comments');
const multer = require('../middlewares/multer');
const auth = require('../middlewares/auth');

//routes pour le CRUD des posts

router.get('/', postCtrl.getAllPosts);
router.get('/:id', postCtrl.getOnePost);
router.post('/' ,auth,multer, postCtrl.createPost);
router.put('/:id',auth, multer, postCtrl.updatePost);
router.delete('/:id',auth, postCtrl.deletePost);
router.post('/:id/like-unlike-post', postCtrl.likeUnlikePost);

//routes pour les commentaires

router.get('/:id/comments', commentCtrl.getComments);
router.post('/:id/comments', commentCtrl.createComment);

module.exports = router;
