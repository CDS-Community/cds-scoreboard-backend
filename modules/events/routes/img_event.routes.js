const { Router } = require('express');
const {
    getImgEvents,
    getImgEvent,
    createImgEvent,
    updateImgEvent,
    deleteImgEvent,
    deleteImgEventByState
} = require('../controllers/img_event');

const router = Router();

router.get('/', getImgEvents);
router.get('/:id', getImgEvent);
router.post('/', createImgEvent);
router.put('/:id', updateImgEvent);
router.delete('/del/:id', deleteImgEvent);
router.delete('/:id', deleteImgEventByState);

module.exports = router;
