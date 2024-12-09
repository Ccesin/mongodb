const mongoose = require('mongoose');

const asignaturaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    unidadesCredito: { type: Number, min: 1, max: 6, required: true },
    profesor: { type: String, required: true },
    descripcion: { type: String, required: true },
    horario: { type: String, required: true },
    aula: { type: Number, min: 1, max: 15, required: true },
    prerequisitos: { type: String, required: true },
    cupoMaximo: { type: Number, min: 1, max: 33, required: true }
});

module.exports = mongoose.model('Asignatura', asignaturaSchema);
