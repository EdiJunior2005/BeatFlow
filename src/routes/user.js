const express = require('express');
const {verificarToken} = require('../middlewares/verificacao')
const userController = require('../controllers/user')
const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/', verificarToken);

module.exports = router;