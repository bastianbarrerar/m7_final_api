const userController = require('../controllers/user.controller')

const router = require('express').Router()

router.get('/', userController.findAll)
router.get('/all', userController.getUserBootcamps)
router.post('/add', userController.createUser)
router.put('/update/:id', userController.updateUserById)
router.get("/:id", userController.findUserById);
router.delete("/delete/:id", userController.deleteUserById)

module.exports = router;

