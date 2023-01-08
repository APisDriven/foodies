const router = require('express').Router();
const userRoutes = require('./user_routes');
const foodEntriesRoutes = require('./food_entries_routes');
const waterEntriesRoutes = require('./water_entries_routes');
// const chartCaloriesRoutes = require('./chart_calories_routes')

//http://localhost:3001/api/users
router.use('/users', userRoutes)
//http://localhost:3001/api/foodEntries
router.use('/foodEntries/', foodEntriesRoutes);
//http://localhost:3001/api/waterEntries
router.use('/waterEntries', waterEntriesRoutes);
//http://localhost:3001/api/chartCalories
// router.use('/chartCalories', chartCaloriesRoutes);

module.exports = router;

