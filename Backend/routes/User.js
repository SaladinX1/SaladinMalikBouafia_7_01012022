const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/User');
const userErrors = require('../utils/errors.utils');


router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);
router.delete('/delete_user', userCtrl.destroyUser);
router.put('/put_user', userCtrl.putUser);





module.exports = router;