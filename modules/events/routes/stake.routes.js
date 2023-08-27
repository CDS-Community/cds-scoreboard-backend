
const { Router } = require('express');
const {
    getStakes,
    getStake,
    createStake,
    updateStake,
    deleteStake,
    deleteStakeByState
} = require('../controllers/stake');
const { validarJWT } = require('../../../middlewares');
const checkRoleAuth = require('../../../middlewares/roleAuth');

const router = Router();

router.get('/',[validarJWT], getStakes);
router.get('/:id',[validarJWT], getStake);
router.post('/',[validarJWT],checkRoleAuth([1]), createStake);
router.put('/:id',[validarJWT],checkRoleAuth([1]), updateStake);
router.delete('/del/:id',[validarJWT],checkRoleAuth([1]), deleteStake);
router.delete('/:id',[validarJWT],checkRoleAuth([1]), deleteStakeByState);

module.exports = router;