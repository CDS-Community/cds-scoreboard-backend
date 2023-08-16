const { Router } = require('express');
const {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    deleteEventByState
} = require('../controllers/event');

const router = Router();

router.get('/', getEvents);
router.get('/:id', getEvent);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/del/:id', deleteEvent);
router.delete('/:id', deleteEventByState);

module.exports = router;