const {Router} = require('express');

const router = Router();

router.get('/staff-events', getStaffEvents);
router.get('/staff-events/:id', getStaffEvent);
router.post('/staff-events', createStaffEvent);
router.put('/staff-events/:id', updateStaffEvent);
router.delete('/staff-events/:id', deleteStaffEvent);

module.exports = router;