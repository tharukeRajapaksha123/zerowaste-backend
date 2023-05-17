const Client = require('../models/Client');

// Create and Save a new Client
exports.create = (req, res) => {
  const client = new Client(req.body);
  client
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Client.',
      });
    });
};

// Retrieve and return all Clients from the database.
exports.findAll = (req, res) => {
    Client.find()
      .then((Clients) => {
        res.send(Clients);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving Clients.',
        });
      });
  };
  
  // Find a single Client with a clientId
  exports.findOne = (req, res) => {
    Client.findById(req.params.clientId)
      .then((Client) => {
        if (!Client) {
          return res.status(404).send({
            message: 'Client not found with id ' + req.params.clientId,
          });
        }
        res.send(Client);
      })
      .catch((err) => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Client not found with id ' + req.params.clientId,
          });
        }
        return res.status(500).send({
          message: 'Error retrieving Client with id ' + req.params.clientId,
        });
      });
  };
  
  // Update a Client identified by the clientId in the request
  exports.update = (req, res) => {
    Client.findByIdAndUpdate(req.params.clientId, req.body, { new: true })
      .then((Client) => {
        if (!Client) {
          return res.status(404).send({
            message: 'Client not found with id ' + req.params.clientId,
          });
        }
        res.send(Client);
      })
      .catch((err) => {
        if (err.kind === 'ObjectId') {
          return res.status(404).send({
            message: 'Client not found with id ' + req.params.clientId,
          });
        }
        return res.status(500).send({
          message: 'Error updating Client with id ' + req.params.clientId,
        });
      });
  };
  
  // Delete a Client with the specified clientId in the request
  exports.delete = (req, res) => {
    Client.findByIdAndRemove(req.params.clientId)
      .then((Client) => {
        if (!Client) {
          return res.status(404).send({
            message: 'Client not found with id ' + req.params.clientId,
          });
        }
        res.send({ message:        'Client deleted successfully!',
      });
    })
    .catch((err) => {
      if (err.kind === 'ObjectId' || err.name === 'NotFound') {
        return res.status(404).send({
          message: 'Client not found with id ' + req.params.clientId,
        });
      }
      return res.status(500).send({
        message: 'Could not delete Client with id ' + req.params.clientId,
      });
    });
  };
  
  
