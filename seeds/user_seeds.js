const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./user_data.json');


const seedUsers = async () => {
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
};

module.exports = seedUsers
