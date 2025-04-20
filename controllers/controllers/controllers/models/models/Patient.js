const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  history: [String],
  prescriptions: [String]
});

module.exports = mongoose.model('Patient', patientSchema);
