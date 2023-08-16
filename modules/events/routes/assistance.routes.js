const { Router } = require('express');
const {
    getAssistances,
    getAssistance,
    createAssistance,
    updateAssistance,
    deleteAssistance,
    deleteAssistanceByState
} = require('../controllers/assistance');

const router = Router();

router.get('/', getAssistances);
router.get('/:id', getAssistance);
router.post('/', createAssistance);
router.put('/:id', updateAssistance);
router.delete('/del/:id', deleteAssistance);
router.delete('/:id',deleteAssistanceByState);

module.exports = router;