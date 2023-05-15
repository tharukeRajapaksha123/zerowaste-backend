const mongoose = require('mongoose');

const WorkAssignmentSchema = new mongoose.Schema({
  workDescription: { type: String, required: true },
  assignee: { type: String, required: true },
  priority: { type: String, required: true },
  deadline: { type: Date, required: true },
  contactInformation: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
});

module.exports = mongoose.model('WorkAssignment', WorkAssignmentSchema);
