const { Router } = require('express');

const router = Router();

router.get('/img-events', getImgEvents);
router.get('/img-events/:id', getImgEvent);
router.post('/img-events', createImgEvent);
router.put('/img-events/:id', updateImgEvent);
router.delete('/img-events/:id', deleteImgEvent);

module.exports = router;