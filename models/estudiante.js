const mongoose = require('mongoose');

const EstudianteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);
