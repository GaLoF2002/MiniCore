const Estudiante = require('../models/estudiante');
const Nota = require('../models/nota');

// Mostrar formulario para registrar notas
exports.mostrarFormularioNotas = async (req, res) => {
    try {
      const estudiantes = await Estudiante.find().lean(); // Notar el uso de .lean()
      res.render('register-notes', { estudiantes });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al cargar la página');
    }
  };
  
// Registrar una nueva nota para un estudiante
exports.registrarNota = async (req, res) => {
  const { estudianteId, calificacion, fecha } = req.body;
  try {
    await Nota.create({
      calificacion,
      fecha,
      estudiante: estudianteId
    });
    res.redirect('/register-notes');
  } catch (error) {
    res.status(500).send('Error al registrar la nota');
  }
};

exports.filtrarNotasPorSemestre = async (req, res) => {
    const {
      fechaInicioSemestre1, fechaFinSemestre1,
      fechaInicioSemestre2, fechaFinSemestre2
    } = req.body;
  
    try {
      const estudiantes = await Estudiante.find().lean();

      const estudiantesConPromedios = await Promise.all(estudiantes.map(async (estudiante) => {
        const notasSemestre1 = await Nota.find({
          estudiante: estudiante._id,
          fecha: { $gte: new Date(fechaInicioSemestre1), $lte: new Date(fechaFinSemestre1) }
        });
        let promedioSemestre1 = notasSemestre1.reduce((acc, nota) => acc + nota.calificacion, 0) / (notasSemestre1.length || 1);
        promedioSemestre1 = (promedioSemestre1 / 10) * 2.5;

        const notasSemestre2 = await Nota.find({
          estudiante: estudiante._id,
          fecha: { $gte: new Date(fechaInicioSemestre2), $lte: new Date(fechaFinSemestre2) }
        });
        let promedioSemestre2 = notasSemestre2.reduce((acc, nota) => acc + nota.calificacion, 0) / (notasSemestre2.length || 1);
        promedioSemestre2 = (promedioSemestre2 / 10) * 3.5;

        // Calcular la nota mínima necesaria para el Progreso 3 para alcanzar el 100%
        const totalPorcentajeActual = promedioSemestre1 + promedioSemestre2;
        const notaMinimaProgreso3 = 6 - totalPorcentajeActual; // Se divide por 4 asumiendo que el tercer progreso también se multiplica para ajustar al 100%

        return {
          ...estudiante,
          promedioSemestre1: promedioSemestre1.toFixed(2),
          promedioSemestre2: promedioSemestre2.toFixed(2),
          notaMinimaProgreso3: notaMinimaProgreso3.toFixed(2)
        };
      }));

      res.render('resultado-promedio', { estudiantes: estudiantesConPromedios });

    } catch (error) {
      console.error(error);
      res.status(500).send('Error al filtrar notas por semestre');
    }
};
