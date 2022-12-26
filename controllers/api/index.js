const router = require('express').Router();
const userRoutes = require('./user_routes');
const foodEntriesRoutes = require('./food_entries_routes');
const waterEntriesRoutes = require('./water_entries_routes');

// TODO user
router.use('/user', userRoutes)
router.use('/foodEntries', foodEntriesRoutes);
router.use('/waterEntries', waterEntriesRoutes);

module.exports = router;

