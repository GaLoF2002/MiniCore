const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/studentController');
const notaController = require('../controllers/notaController'); // Importa el nuevo controlador de notas

// Ruta para la página de inicio
router.get('/', estudiantesController.getHome);

// Rutas para manejo de estudiantes
router.post('/estudiantes', estudiantesController.registrarEstudiante);

// Rutas para manejo de notas
router.get('/register-notes', notaController.mostrarFormularioNotas); // Muestra el formulario para registrar notas
router.post('/register-notes', notaController.registrarNota); // Procesa el formulario de registro de notas

// Ruta para mostrar el formulario de establecimiento de fechas de semestres
router.get('/register-dates', (req, res) => {
    res.render('register-dates'); // Asegura que este nombre corresponda a tu archivo de vista
});

// Ruta para filtrar notas por semestre según las fechas proporcionadas
router.post('/filter-notas', notaController.filtrarNotasPorSemestre); // Procesa el formulario de fechas de semestre

// Asegúrate de exportar el router para que pueda ser utilizado por tu aplicación principal
module.exports = router;
