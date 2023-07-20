const bootcampController = require("../controllers/bootcamp.controller");
const { authenticateToken } = require("../middleware/auth");

const router = require("express").Router();

router.get("/", authenticateToken, bootcampController.findAll);
router.get("/all", authenticateToken, bootcampController.getBootcampUsers);
router.get(
  "/all/:id",
  authenticateToken,
  bootcampController.getBootcampUsersById
);
router.post("/add", authenticateToken, bootcampController.createBootcamp);
router.get("/:id", authenticateToken, bootcampController.findById);
router.post(
  "/:bootcamp_id/add/:user_id",
  authenticateToken,
  bootcampController.addUser
);


http://localhost:3000/api/v1/bootcamps/  => lista todos los bootcamps
module.exports = router;