// import models
const FoodEntry = require('./FoodEntry');
const WaterEntry = require('./WaterEntry');
const User = require('./User');

// Food Entry belongsTo User
FoodEntry.belongsTo(User, {foreignKey: 'userId'})
// Categories have many Products
WaterEntry.belongsTo(User, {foreignKey: 'userId'})

module.exports = {
    FoodEntry,
    WaterEntry,
    User
};
