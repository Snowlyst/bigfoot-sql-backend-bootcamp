const express = require("express");
const router = express.Router();

class SightingsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get("/", this.controller.getAll.bind(this.controller));
    router.get("/:sightingId", this.controller.getOne.bind(this.controller));
    router.post("/", this.controller.addSighting.bind(this.controller));
    router.delete("/:id", this.controller.deleteSighting.bind(this.controller));
    router.put("/:id", this.controller.editSighting.bind(this.controller));
    //for comments
    router.get(
      "/:id/comments",
      this.controller.retrieveComments.bind(this.controller)
    );
    router.post(
      "/:id/comments",
      this.controller.addComment.bind(this.controller)
    );
    router.delete(
      "/:sightingId/comments/:deleteId",
      this.controller.deleteComment.bind(this.controller)
    );
    return router;
  }
}

module.exports = SightingsRouter;
