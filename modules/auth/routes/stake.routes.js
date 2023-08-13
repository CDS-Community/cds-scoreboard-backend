const { Router } = require('express');

const router = Router();

router.get('/stakes', getStakes);
router.get('/stakes/:id', getStake);
router.post('/stakes', createStake);
router.put('/stakes/:id', updateStake);
router.delete('/stakes/:id', deleteStake);

module.exports = router;