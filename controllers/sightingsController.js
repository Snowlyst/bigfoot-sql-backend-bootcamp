const BaseController = require("./baseController");

class SightingsController extends BaseController {
  constructor(model) {
    super(model);
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
}

module.exports = SightingsController;
