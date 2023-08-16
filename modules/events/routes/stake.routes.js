
const { Router } = require('express');
const {
    getStakes,
    getStake,
    createStake,
    updateStake,
    deleteStake,
    deleteStakeByState
} = require('../controllers/stake');

const router = Router();

router.get('/', getStakes);
router.get('/:id', getStake);
router.post('/', createStake);
router.put('/:id', updateStake);
router.delete('/del/:id', deleteStake);
router.delete('/:id', deleteStakeByState);

module.exports = router;