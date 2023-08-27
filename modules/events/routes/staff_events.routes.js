const { Router } = require('express');
const {
    getStaffEvents,
    getStaffEvent,
    createStaffEvent,
    updateStaffEvent,
    deleteStaffEvent,
    deleteStaffEventByState
} = require('../controllers/staff_Event');
const { validarJWT } = require('../../../middlewares');
const checkRoleAuth = require('../../../middlewares/roleAuth');

const router = Router();

router.get('/',[validarJWT], getStaffEvents);
router.get('/:id',[validarJWT], getStaffEvent);
router.post('/',[validarJWT],checkRoleAuth([1]), createStaffEvent);
router.put('/:id',[validarJWT],checkRoleAuth([1]), updateStaffEvent);
router.delete('/del/:id',[validarJWT],checkRoleAuth([1]), deleteStaffEvent);
router.delete('/:id',[validarJWT],checkRoleAuth([1]), deleteStaffEventByState);

module.exports = router;