"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sighting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // EACH SIGHTING CAN hasMany comments, but each comment can only belongTo one sighting
      this.hasMany(models.comment);
      // each sighting can have many categories, and each category can have many sightings
      this.belongsToMany(models.categories, { through: "sightingCategories" });
    }
  }
  Sighting.init(
    {
      date: DataTypes.DATE,
      location: DataTypes.STRING,
      notes: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "sighting",
      underscored: true,
    }
  );
  return Sighting;
};
