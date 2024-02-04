const Estudiante = require('../models/estudiante');

exports.getHome = (req, res) => {
  res.render('home');
};

exports.registrarEstudiante = async (req, res) => {
  const { nombre } = req.body;
  try {
    await Estudiante.create({ nombre });
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error al registrar el estudiante');
  }
};

