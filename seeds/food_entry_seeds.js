const { FoodEntry } = require('../models');

const today = new Date()

const foodEntryData = [
  {
    name: 'eggs',
    calories: 285,
    date: new Date().setDate(today.getDate() - 5),
    userId: 1
  },
  {
    name: 'hot dog',
    calories: 151,
    date: new Date().setDate(today.getDate() - 7),
    userId: 1
  },
  {
    name: 'greek salad with dressing',
    calories: 211,
    date: new Date().setDate(today.getDate() - 6),
    userId: 2
  },
  {
    name: 'ramen bowl',
    calories: 500,
    date: new Date().setDate(today.getDate() - 4),
    userId: 2
  },
  {
    name: 'ramen bowl',
    calories: 500,
    date: new Date().setDate(today.getDate() - 2),
    userId: 2
  },
  {
    name: 'salmon',
    calories: 412,
    date: new Date().setDate(today.getDate() - 3),
    userId: 2
  },
  {
    name: 'chicken pasta',
    calories: 127,
    date: new Date().setDate(today.getDate() - 2),
    userId: 3
  },
];

const seedFoodEntries = () => FoodEntry.bulkCreate(foodEntryData)

module.exports = seedFoodEntries;
