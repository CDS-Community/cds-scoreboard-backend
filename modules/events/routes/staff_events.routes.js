const { Router } = require('express');
const {
    getStaffEvents,
    getStaffEvent,
    createStaffEvent,
    updateStaffEvent,
    deleteStaffEvent
} = require('../controllers/staff_Event');

const router = Router();

router.get('/', getStaffEvents);
router.get('/:id', getStaffEvent);
router.post('/', createStaffEvent);
router.put('/:id', updateStaffEvent);
router.delete('/:id', deleteStaffEvent);

module.exports = router;