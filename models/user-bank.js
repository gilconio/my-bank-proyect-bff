const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    rut: {
        type: String,
        required: [true, 'El rut es requerido']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    correo: {
        type: String,
        required: [true, 'El correo es requerido'],
        unique: true
    },
    telefono: {
        type: String,
        required: [true, 'El telefono es requerido']
    },
    banco: {
        type: String,
        required: [true, 'El banco es requerido']
    },
    tipocuenta: {
        type: String,
        required: [true, 'El tipocuenta es requerido']
    },
    ncuenta: {
        type: String,
        required: [true, 'El ncuenta es requerido']
    },
})


module.exports = model('Usuario', UserSchema);