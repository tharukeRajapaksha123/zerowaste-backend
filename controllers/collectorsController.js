const Collector = require('../models/Collector');

// Create and Save a new Collector
exports.create = (req, res) => {
  const collector = new Collector(req.body);
  collector
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Collector.',
      });
    });
};

// Retrieve and return all collectors from the database.
exports.findAll = (req, res) => {
  Collector.find()
    .then((collectors) => {
      res.send(collectors);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving collectors.',
      });
    });
};

// Find a single collector with a collectorId
exports.findOne = (req, res) => {
  Collector.findById(req.params.collectorId)
    .then((collector) => {
      if (!collector) {
        return res.status(404).send({
          message: 'Collector not found with id ' + req.params.collectorId,
        });
      }
      res.send(collector);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Collector not found with id ' + req.params.collectorId,
        });
      }
      return res.status(500).send({
        message: 'Error retrieving collector with id ' + req.params.collectorId,
      });
    });
};

// Update a collector identified by the collectorId in the request
exports.update = (req, res) => {
  Collector.findByIdAndUpdate(req.params.collectorId, req.body, { new: true })
    .then((collector) => {
      if (!collector) {
        return res.status(404).send({
          message: 'Collector not found with id ' + req.params.collectorId,
        });
      }
      res.send(collector);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        return res.status(404).send({
          message: 'Collector not found with id ' + req.params.collectorId,
        });
      }
      return res.status(500).send({
        message: 'Error updating collector with id ' + req.params.collectorId,
      });
    });
};

// Delete a collector with the specified collectorId in the request
exports.delete = (req, res) => {
  Collector.findByIdAndRemove(req.params.collectorId)
    .then((collector) => {
      if (!collector) {
        return res.status(404).send({
          message: 'Collector not found with id ' + req.params.collectorId,
        });
      }
      res.send({ message:        'Collector deleted successfully!',
    });
  })
  .catch((err) => {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).send({
        message: 'Collector not found with id ' + req.params.collectorId,
      });
    }
    return res.status(500).send({
      message: 'Could not delete collector with id ' + req.params.collectorId,
    });
  });
};

