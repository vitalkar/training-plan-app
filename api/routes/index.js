const router = require('express').Router();
const userController = require('../controllers/users');
const authController = require('../controllers/auth');

router.route('/users')
    .get(userController.getUser)
    .post(userController.createUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)


router.post('/register', authController.register);

router.post('/login', authController.login);

module.exports = router;