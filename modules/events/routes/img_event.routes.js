const { Router } = require('express');
const {
    getImgEvents,
    getImgEvent,
    createImgEvent,
    updateImgEvent,
    deleteImgEvent,
    deleteImgEventByState
} = require('../controllers/img_event');
const { validarJWT } = require('../../../middlewares');
const checkRoleAuth = require('../../../middlewares/roleAuth');

const router = Router();

router.get('/',[validarJWT], getImgEvents);
router.get('/:id',[validarJWT], getImgEvent);
router.post('/',[validarJWT],checkRoleAuth([1]), createImgEvent);
router.put('/:id',[validarJWT],checkRoleAuth([1]), updateImgEvent);
router.delete('/del/:id',[validarJWT],checkRoleAuth([1]), deleteImgEvent);
router.delete('/:id',[validarJWT],checkRoleAuth([1]), deleteImgEventByState);

module.exports = router;
