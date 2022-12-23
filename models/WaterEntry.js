const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class WaterEntry extends Model {}

WaterEntry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    ounces: {
      type: DataTypes.DOUBLE
    },
    date: {
      type: DataTypes.DATE
    },
    userId: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'waterEntry',
  }
);

module.exports = WaterEntry;
