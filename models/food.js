
const { Model, DataTypes } = require('sequelize');

class Food extends Model{};

Food.create({
    name: "Salmon",
    quantity: 300,
    date: new Date()
})

// food.build = a 

Food.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
      }
    });