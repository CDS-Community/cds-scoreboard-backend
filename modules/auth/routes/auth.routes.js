const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../../../middlewares');
const { login, googleSingIn } = require('../controllers/auth');

const router = Router();


router.post('/login', [
    check('email', 'El correo es obligatorio - router erros').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login);


/**
 * AUTENTICACION POR GOOGLE : POR TERMINAR DE IMPLEMENTAR
 */
// router.post('/google', [
//     check('id_token', 'id_token de Google es nesesario').not().isEmpty(),
//     validarCampos
// ], googleSingIn);

module.exports = router;