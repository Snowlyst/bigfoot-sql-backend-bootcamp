const BaseController = require("./baseController");

class CategoriesController extends BaseController {
  constructor(model) {
    super(model);
  }

  async getCategory(req, res) {
    try {
      const sendBack = await this.model.findAll();
      return res.json(sendBack);
    } catch (error) {
      console.log(error);
      return res.status(400).json("There is an error");
    }
  }

  async addCategory(req, res) {
    try {
      const data = req.body.name;
      await this.model.create({ name: data });
      const sendBack = await this.model.findAll();
      return res.json(sendBack);
    } catch (error) {
      console.log(error);
      return res.status(400).json("There is an error");
    }
  }

  async deleteCategory(req, res) {
    try {
      const deleteId = req.params.id;
      await this.model.destroy({ where: { id: deleteId } });
      const sendBack = await this.model.findAll();
      return res.json(sendBack);
    } catch (error) {
      console.log(error);
      res.status(400).json("There has been an error");
    }
  }
}

module.exports = CategoriesController;
