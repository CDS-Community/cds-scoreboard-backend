const { Router } = require('express');
const {
    getAssistances,
    getAssistance,
    createAssistance,
    updateAssistance,
    deleteAssistance
} = require('../controllers/assistance');

const router = Router();

router.get('/', getAssistances);
router.get('/:id', getAssistance);
router.post('/', createAssistance);
router.put('/:id', updateAssistance);
router.delete('/:id', deleteAssistance);

module.exports = router;