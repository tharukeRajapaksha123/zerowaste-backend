const mongoose = require('mongoose');

const CollectorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInformation: {
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
  },
  idNumber: { type: String, required: true, unique: true },
  workSchedule: { type: String, required: true },
  assignedAreas: { type: String, required: true },
});

module.exports = mongoose.model('Collector', CollectorSchema);
