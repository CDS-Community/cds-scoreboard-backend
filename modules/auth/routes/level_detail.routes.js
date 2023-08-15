const { Router } = require('express');
// const { check } = require('express-validator');

const {
    gets,
    get,
    post,
    put,
    delet,
    deletState
} = require('../controllers/level_detail');

const router = Router();

// Llamar todos los datos
router.get('/', gets);

// Llamar un datos en especifico
router.get('/:id', get);

// Crear un dato
router.post('/', post);

// Modificar un dato
router.put('/:id', put);

// Eliminar permanentemente un dato
router.delete('/del/:id', delet);

// Eliminar un dato a travez del estado { state = false }
router.delete('/:id', deletState);

module.exports = router;