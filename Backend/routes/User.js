const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/User');
const auth = require('../middlewares/auth')


router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);
router.get('/get_user', auth, userCtrl.getOneUser);
router.delete('/delete_user',auth, userCtrl.destroyUser);
router.put('/put_user',auth, userCtrl.putUser);





module.exports = router;