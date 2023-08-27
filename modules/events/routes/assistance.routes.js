const { Router } = require('express');
const {
    getAssistances,
    getAssistance,
    createAssistance,
    updateAssistance,
    deleteAssistance,
    deleteAssistanceByState
} = require('../controllers/assistance');

const checkRoleAuth = require('../../../middlewares/roleAuth');
const { validarJWT } = require('../../../middlewares');



const router = Router();


//[1] es el id del rol administrador

router.get('/',[validarJWT],getAssistances);
router.get('/:id',[validarJWT],getAssistance);
router.post('/',[validarJWT], checkRoleAuth([1]),createAssistance);
router.put('/:id',[validarJWT],checkRoleAuth([1]), updateAssistance);
router.delete('/del/:id',[validarJWT],checkRoleAuth([1]), deleteAssistance);
router.delete('/:id',[validarJWT],checkRoleAuth([1]), deleteAssistanceByState);

module.exports = router;