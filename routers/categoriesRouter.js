const express = require("express");
const router = express.Router();

class CategoriesRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    router.get("/", this.controller.getCategory.bind(this.controller));
    router.post("/", this.controller.addCategory.bind(this.controller));
    router.delete("/:id", this.controller.deleteCategory.bind(this.controller));
    return router;
  }
}

module.exports = CategoriesRouter;
