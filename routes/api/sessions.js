const router = require("express").Router();
const sessionsController = require("../../controllers/sessionsController");

// Matches with "/api/sessions"
router
.route("/")
  .get(sessionsController.findAll)
  .post(sessionsController.create);

// Matches with "/api/users/:id/:updateField"
//router.route("/:id/:updateField").put(sessionsController.update);

router
.route("/open/:id")
.get(sessionsController.findByInstructor)

router
.route("/closed/:id")
.get(sessionsController.findByInstructorClosed)

router
.route("/client/:id")
.get(sessionsController.findByClientClosed)

// Matches with "/api/sessions/:id"
router
  .route("/:id")
  .get(sessionsController.findById)
  .delete(sessionsController.remove)
  .put(sessionsController.update)

module.exports = router;
