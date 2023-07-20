const userController = require('../controllers/user.controller')
const { authenticateToken } = require("../middleware/auth");

const router = require('express').Router()

router.get("/", authenticateToken, userController.findAll);
router.get("/all", authenticateToken, userController.getUserBootcamps);
router.post('/signup', userController.createUser)
router.post('/signin', userController.signInUser)
router.put("/update/:id", authenticateToken, userController.updateUserById);
router.delete("/delete/:id", authenticateToken, userController.deleteUserById);
router.get("/:id", authenticateToken, userController.findUserById);

module.exports = router;

