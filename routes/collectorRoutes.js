const express = require('express');
const router = express.Router();

const collectorsController = require('../controllers/collectorsController');

router.post('/collectors', collectorsController.create);
router.get('/collectors', collectorsController.findAll);
router.get('/collectors/:collectorId', collectorsController.findOne);
router.put('/collectors/:collectorId', collectorsController.update);
router.delete('/collectors/:collectorId', collectorsController.delete);

module.exports = router;
