const WorkAssignment = require('../models/WorkAssignment');

// Create and Save a new Work Assignment
exports.create = (req, res) => {
  const workAssignment = new WorkAssignment(req.body);
  workAssignment
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Work Assignment.',
      });
    });
};

// Retrieve and return all WorkAssignments from the database.
exports.findAll = (req, res) => {
    WorkAssignment.find()
      .then((WorkAssignments) => {
        res.send(WorkAssignments);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving WorkAssignments.',
        });
      });
  };
  
  // Find a single WorkAssignment with a WorkAssignmentId
  exports.findOne = (req, res) => {
    WorkAssignment.findById(req.params.WorkAssignmentId)
      .then((WorkAssignment) => {
        if (!WorkAssignment) {
          return res.status(404).send({
            message: 'WorkAssignment not found with id ' + req.params.WorkAssignmentId,
          });
        }
        res.send(WorkAssignment);
      })
      .catch((err) => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'WorkAssignment not found with id ' + req.params.WorkAssignmentId,
          });
        }
        return res.status(500).send({
          message: 'Error retrieving WorkAssignment with id ' + req.params.WorkAssignmentId,
        });
      });
  };
  
  // Update a WorkAssignment identified by the WorkAssignmentId in the request
  exports.update = (req, res) => {
    WorkAssignment.findByIdAndUpdate(req.params.WorkAssignmentId, req.body, { new: true })
      .then((WorkAssignment) => {
        if (!WorkAssignment) {
          return res.status(404).send({
            message: 'WorkAssignment not found with id ' + req.params.WorkAssignmentId,
          });
        }
        res.send(WorkAssignment);
      })
      .catch((err) => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'WorkAssignment not found with id ' + req.params.WorkAssignmentId,
          });
        }
        return res.status(500).send({
          message: 'Error updating WorkAssignment with id ' + req.params.WorkAssignmentId,
        });
      });
  };
  
  // Delete a WorkAssignment with the specified WorkAssignmentId in the request
  exports.delete = (req, res) => {
    WorkAssignment.findByIdAndRemove(req.params.WorkAssignmentId)
      .then((WorkAssignment) => {
        if (!WorkAssignment) {
          return res.status(404).send({
            message: 'WorkAssignment not found with id ' + req.params.WorkAssignmentId,
          });
        }
        res.send({ message:        'WorkAssignment deleted successfully!',
      });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'WorkAssignment not found with id ' + req.params.WorkAssignmentId,
        });
      }
      return res.status(500).send({
        message: 'Could not delete WorkAssignment with id ' + req.params.WorkAssignmentId,
      });
    });
  };
