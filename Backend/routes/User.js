const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/User');

router.post('/signup', userCtrl.signUp);
router.post('/signin', userCtrl.signIn);
router.post('/signout', userCtrl.signOut);





module.exports = router;