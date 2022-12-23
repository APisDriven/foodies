const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class FoodEntry extends Model {}

FoodEntry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    calories: {
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.timestamps
    },
    userId: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'foodEntry',
  }
);

module.exports = FoodEntry;
