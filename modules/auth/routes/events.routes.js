const { Router } = require('express');

const router = Router();

router.get('/events', getEvents);
router.get('/events/:id', getEvent);
router.post('/events', createEvent);
router.put('/events/:id', updateEvent);
router.delete('/events/:id', deleteEvent);

module.exports = router;