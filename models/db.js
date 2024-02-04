const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Minicore1')
  .then(() => console.log('Conectado a MongoDB: Minicore1'))
  .catch(err => console.error('No se pudo conectar a MongoDB.', err));
