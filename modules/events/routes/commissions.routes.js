const { Router } = require('express');
const {
    getCommissions,
    getCommission,
    createCommission,
    updateCommission,
    deleteCommission,
    deleteCommissionByState
} = require('../controllers/commission');

const router = Router();

router.get('/', getCommissions);
router.get('/:id', getCommission);
router.post('/', createCommission);
router.put('/:id', updateCommission);
router.delete('/del/:id', deleteCommission);
router.delete('/:id', deleteCommissionByState);

module.exports = router;