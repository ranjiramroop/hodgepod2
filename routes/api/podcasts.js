const router = require("express").Router();
const podcastsController = require("../../controllers/podcastsController");

// Matches with "/api/books"
router
  .route("/")
  .get(podcastsController.findAll)
  .post(podcastsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(podcastsController.findById)
  .put(podcastsController.update)
  .delete(podcastsController.remove);

module.exports = router;
