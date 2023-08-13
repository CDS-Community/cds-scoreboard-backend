const { Router } = require('express');

const router = Router();

router.get('/commissions', getCommissions);
router.get('/commissions/:id', getCommission);
router.post('/commissions', createCommission);
router.put('/commissions/:id', updateCommission);
router.delete('/commissions/del/:id', deleteCommission);
router.delete('/commissions/:id', deleteCommissionByState);

module.exports = router;