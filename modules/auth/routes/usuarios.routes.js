const {Router} = require('express');

const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/del/:id', deleteUser);
router.delete('/users/:id', deleteUserByState);

module.exports = router;