const router = require('express').Router();
const commentCtrl = require('../controllers/Comments');


router.put('/:id', commentCtrl.updateComment);
router.delete('/:id', commentCtrl.deleteComment);

module.exports = router