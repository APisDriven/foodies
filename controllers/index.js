const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboard_routes');

//http://localhost:3001/
router.use('/', homeRoutes);
//http://localhost:3001/api
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
