const BaseController = require("./baseController");

class SightingsController extends BaseController {
  constructor(model, commenter) {
    super(model);
    this.commenter = commenter;
  }

  // Retrieve specific sighting
  async getOne(req, res) {
    const { sightingId } = req.params;
    try {
      const sighting = await this.model.findByPk(sightingId);
      return res.json(sighting);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  }

  addSighting = async (req, res) => {
    const sighting = req.body;
    console.log(req.body);
    const sightingsTotal = await this.model.create({
      ...sighting,
    });
    console.log(sightingsTotal);
    const sendBack = await this.model.findAll();
    res.json({ sighting: sendBack, message: "success" });
  };

  deleteSighting = async (req, res) => {
    const deleteId = req.params.id;
    await this.model.destroy({
      where: {
        id: deleteId,
      },
    });
    const sendBack = await this.model.findAll();
    res.json({ sighting: sendBack, message: `Deleted ${deleteId}` });
  };

  editSighting = async (req, res) => {
    const editId = req.params.id;
    await this.model.update(
      {
        date: req.body.date,
        location: req.body.location,
        notes: req.body.notes,
      },
      {
        where: {
          id: editId,
        },
      }
    );
    const sendBack = await this.model.findAll();
    res.json({ sighting: sendBack, message: `Deleted ${editId}` });
  };

  // these for comments
  retrieveComments = async (req, res) => {
    const getId = req.params.id;
    try {
      const sendBack = await this.commenter.findAll({
        where: {
          sightingId: getId,
        },
      });
      return res.json(sendBack);
    } catch (error) {
      console.log(error);
      return res.status(400).json("There is an error");
    }
  };

  addComment = async (req, res) => {
    const getId = req.params.id;
    const commentData = req.body.data;
    console.log(commentData);
    console.log(getId);
    try {
      const newComment = await this.commenter.create({
        content: commentData,
        sightingId: getId,
      });
      console.log(newComment);
      const sendBack = await this.commenter.findAll({
        where: {
          sightingId: getId,
        },
      });
      return res.json(sendBack);
    } catch (error) {
      console.log(error);
      return res.status(400).json("ERROR");
    }
  };

  deleteComment = async (req, res) => {
    console.log(req.params);
    const { getId, deleteId } = req.params;
    console.log(getId, deleteId);
    try {
      const destruction = await this.commenter.destroy({
        where: {
          id: deleteId,
        },
      });
      console.log(destruction);
      const sendBack = await this.commenter.findAll({
        where: {
          sightingId: getId,
        },
      });
      return res.json(sendBack);
    } catch (error) {
      console.log(error);
      return res.status(400).json("ERROR");
    }
  };
}

module.exports = SightingsController;
