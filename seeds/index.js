const seedUsers = require('./user_seeds');
const seedWaterEntries = require('./water_entry_seeds');
const seedFoodEntries = require('./food_entry_seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedFoodEntries();
  console.log('\n----- FOOD ENTRIES SEEDED -----\n');

  process.exit(0);
};

seedAll();
