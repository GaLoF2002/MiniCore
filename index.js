const express = require('express');
const mongoose = require('mongoose');
const {engine} = require('express-handlebars');
const estudiantesRoutes = require('./routes/index');
const app = express();
const db = require('./models/db');


// Conexión a MongoDB
// Configuración de Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Middleware
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/', estudiantesRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
