const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/User');

router.post('/signup', userCtrl.signUp);
router.post('/login', userCtrl.signIn);
router.post('/logout', userCtrl.signOut);



module.exports = router;