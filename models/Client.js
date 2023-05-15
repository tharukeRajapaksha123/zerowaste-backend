const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInformation: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
  },
  serviceAddress: { type: String, required: true },
});

module.exports = mongoose.model('Client', ClientSchema);
