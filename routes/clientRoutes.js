const express = require('express');
const router = express.Router();

const clientsController = require('../controllers/clientsController');

router.post('/clients', clientsController.create);
router.get('/clients', clientsController.findAll);
router.get('/clients/:clientId', clientsController.findOne);
router.put('/clients/:clientId', clientsController.update);
router.delete('/clients/:clientId', clientsController.delete);

module.exports = router;
