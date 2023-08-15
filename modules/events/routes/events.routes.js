const { Router } = require('express');
const {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent
} = require('../controllers/event');

const router = Router();

router.get('/', getEvents);
router.get('/:id', getEvent);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

module.exports = router;