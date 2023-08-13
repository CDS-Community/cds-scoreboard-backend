const { Router } = require('express');

const router = Router();

router.get('/assistances', getAssistances);
router.get('/assistances/:id', getAssistance);
router.post('/assistances', createAssistance);
router.put('/assistances/:id', updateAssistance);
router.delete('/assistances/:id', deleteAssistance);

module.exports = router;