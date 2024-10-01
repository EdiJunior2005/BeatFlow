const express = require('express');
const { signup, login } = require('../controllers/user');
const { verificarToken } = require('../middlewares/verificacao');
const router = express.Router();

router.post('/', signup);
router.post('/', login);
router.get('/', verificarToken);

module.exports = router;