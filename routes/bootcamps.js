const express = require("express");
const router = express.Router();

const {
  getBootcamps,
  updateBootcamp,
  deleteBootcamp,
  createBootcamp,
  getBootcamp,
} = require("../controller/bootcamps");

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

router.route("/").get(getBootcamps).post(createBootcamp);

module.exports = router;
