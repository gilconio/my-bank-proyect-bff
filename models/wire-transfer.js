const { Schema, model } = require('mongoose');

const TransferFieldsSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El rut es requerido']
    },
    rut: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    banco: {
        type: String,
        required: [true, 'El correo es requerido'],
        unique: true
    },
    tipocuenta: {
        type: String,
        required: [true, 'El telefono es requerido']
    },
    monto: {
        type: String,
        required: [true, 'El monto es requerido']
    }
})


module.exports = model('Transferencia', TransferFieldsSchema);