const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, validarCampos } = require('../../../middlewares')

const {
    gets,
    get,
    post,
    put,
    delet,
    deletState,
    /*
     * OPERACIONES DE PRUEVA
     */
    getslimit,
    postpre,
    putpre,
    deletpre
} = require('../controllers/user');

const router = Router();



// Llamar todos los datos
router.get('/', [
    validarJWT,
    validarCampos
], gets);

// Llamar un datos en especifico
router.get('/:id', get);

// Crear un dato
router.post('/', [
    validarJWT,
    check('email', 'El correo es obligatorio - router erros').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], post);

// Modificar un dato
router.put('/:id', [

], put);

// Eliminar permanentemente un dato
router.delete('/del/:id', delet);

// Eliminar un dato a travez del estado { state = false }
router.delete('/:id', deletState);

/*
 * OPERACIONES DE PRUEVA
 */

// Llamar todos los datos CON LIMITES - PRE
router.get('/pre', getslimit);

// Crear un dato PRE
router.post('/pre', postpre);

// Modificar un dato PRE
router.put('/pre/:id', putpre);

// Eliminar un dato PRE
router.delete('/pre/:id', deletpre);

module.exports = router;