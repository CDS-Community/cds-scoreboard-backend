const { Router } = require('express');
const {
    getStaffEvents,
    getStaffEvent,
    createStaffEvent,
    updateStaffEvent,
    deleteStaffEvent,
    deleteStaffEventByState
} = require('../controllers/staff_Event');

const router = Router();

router.get('/', getStaffEvents);
router.get('/:id', getStaffEvent);
router.post('/', createStaffEvent);
router.put('/:id', updateStaffEvent);
router.delete('/del/:id', deleteStaffEvent);
router.delete('/:id', deleteStaffEventByState);

module.exports = router;