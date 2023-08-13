const {Router} = require('express');

const router = Router();

router.get('/levels', getLevels);
router.get('/levels/:id', getLevel);
router.post('/levels', createLevel);
router.put('/levels/:id', updateLevel);
router.delete('/levels/del/:id', deleteLevel);
router.delete('/levels/:id', deleteLevelByState);

module.exports = router;