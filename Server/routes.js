const router = require('express').Router();

const userController = require('./controllers/userController');
const mythController = require('./controllers/mythController');

router.use('/users', userController);
router.use('/myths', mythController);

module.exports = router;