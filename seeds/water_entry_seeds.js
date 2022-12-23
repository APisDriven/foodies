const { WaterEntry } = require('../models');

const today = new Date()

const waterEntryData = [
  {
    ounces: 33,
    date: new Date().setDate(today.getDate() - 4).toLocaleString,
    userId: 1
  },
  {
    ounces: 25,
    date: new Date().setDate(today.getDate() - 2).toLocaleString,
    userId: 1
  },
  {
    ounces: 65,
    date: new Date().setDate(today.getDate() - 2).toLocaleString,
    userId: 2
  },
  {
    ounces: 30,
    date: new Date().setDate(today.getDate() - 3).toLocaleString,
    userId: 2
  },
  {
    ounces: 50,
    date: new Date().setDate(today.getDate() - 2).toLocaleString,
    userId: 3
  },
  {
    ounces: 60,
    date: new Date().setDate(today.getDate() - 5).toLocaleString,
    userId: 3
  },
];

const seedWaterEntries = () => WaterEntry.bulkCreate(waterEntryData);

module.exports = seedWaterEntries;
