const router = require('express').Router();
const userRoutes = xrequire('./user_routes');
const foodEntriesRoutes = require('./food_entries_routes');
const waterEntriesRoutes = require('./water_entries_routes');

//http://localhost:3001/api/users
router.use('/users', userRoutes)
//http://localhost:3001/api/foodEntries
router.use('/foodEntries', foodEntriesRoutes);
//http://localhost:3001/api/waterEntries
router.use('/waterEntries', waterEntriesRoutes);

module.exports = router;

