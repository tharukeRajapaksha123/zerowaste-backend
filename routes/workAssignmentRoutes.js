const express = require('express');
const router = express.Router();

const workAssignmentsController = require('../controllers/workAssignmentsController');

router.post('/workAssignments', workAssignmentsController.create);
router.get('/workAssignments', workAssignmentsController.findAll);
router.get('/workAssignments/:workAssignmentId', workAssignmentsController.findOne);
router.put('/workAssignments/:workAssignmentId', workAssignmentsController.update);
router.delete('/workAssignments/:workAssignmentId', workAssignmentsController.delete);

module.exports = router;
