const bootcampController = require("../controllers/bootcamp.controller");

const router = require("express").Router();

router.get("/", bootcampController.findAll);
router.get("/all", bootcampController.getBootcampUsers)
router.get("/all/:id", bootcampController.getBootcampUsersById)
router.post("/add", bootcampController.createBootcamp);
router.get("/:id", bootcampController.findById);
router.post('/:bootcamp_id/add/:user_id', bootcampController.addUser);


module.exports = router;