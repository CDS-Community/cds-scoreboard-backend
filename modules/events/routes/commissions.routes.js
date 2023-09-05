const { Router } = require('express');
const {
    getCommissions,
    getCommission,
    createCommission,
    updateCommission,
    deleteCommission,
    deleteCommissionByState
} = require('../controllers/commission');
const { validarJWT } = require('../../../middlewares');
const checkRoleAuth = require('../../../middlewares/roleAuth');

const router = Router();

//[1] es el id del rol administrador

router.get('/',[validarJWT], getCommissions);
router.get('/:id',[validarJWT], getCommission);
router.post('/',[validarJWT],checkRoleAuth([1]),createCommission);
router.put('/:id',[validarJWT],checkRoleAuth([1]), updateCommission);
router.delete('/del/:id',[validarJWT],checkRoleAuth([1]), deleteCommission);
router.delete('/:id',[validarJWT],checkRoleAuth([1]), deleteCommissionByState);

module.exports = router;