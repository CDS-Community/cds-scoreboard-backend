const {Router} = require('express');
const router = Router();

router.get('/positions', getPositions);
router.get('/positions/:id', getPosition);
router.post('/positions', createPosition);
router.put('/positions/:id', updatePosition);
router.delete('/positions/del/:id', deletePosition);
router.delete('/positions/:id', deletePositionByState);

module.exports = router;