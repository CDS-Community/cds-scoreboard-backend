
const { Router } = require('express');
const {
    getStakes,
    getStake,
    createStake,
    updateStake,
    deleteStake
} = require('../controllers/stake');

const router = Router();

router.get('/', getStakes);
router.get('/:id', getStake);
router.post('/', createStake);
router.put('/:id', updateStake);
router.delete('/:id', deleteStake);

module.exports = router;