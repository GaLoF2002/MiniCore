const mongoose = require('mongoose');

// Antes: ref: 'estudiante'
// Después: ref: 'Estudiante'
const notaSchema = new mongoose.Schema({
    calificacion: {
      type: Number,
      required: true
    },
    fecha: {
      type: Date,
      required: true
    },
    estudiante: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Estudiante', // Asegúrate de que esto coincida exactamente con cómo registraste el modelo
      required: true
    }
  });
  
  module.exports = mongoose.model('Nota', notaSchema);
  