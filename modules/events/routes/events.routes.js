const { Router } = require('express');
const {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    deleteEventByState
} = require('../controllers/event');
const { validarJWT } = require('../../../middlewares');
const checkRoleAuth = require('../../../middlewares/roleAuth');

const router = Router();

//[1] es el id del rol administrador

router.get('/',[validarJWT], getEvents);
router.get('/:id',[validarJWT], getEvent);
router.post('/',[validarJWT],checkRoleAuth([1]), createEvent);
router.put('/:id',[validarJWT],checkRoleAuth([1]), updateEvent);
router.delete('/del/:id',[validarJWT],checkRoleAuth([1]), deleteEvent);
router.delete('/:id',[validarJWT],checkRoleAuth([1]), deleteEventByState);

module.exports = router;