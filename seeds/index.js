const seedUsers = require('./user_seeds');
const seedWaterEntries = require('./water_entry_seeds');
const seedFoodEntries = require('./food_entry_seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedWaterEntries();
  await seedFoodEntries();
  process.exit(0);
};

seedAll();
