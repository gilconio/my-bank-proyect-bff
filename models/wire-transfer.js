const { Schema, model } = require('mongoose');

const TransferFieldsSchema = Schema({
    nombre: {
        type: String
    },
    rut: {
        type: String
    },
    banco: {
        type: String
    },
    tipocuenta: {
        type: String
    },
    monto: {
        type: String
    }
})


module.exports = model('Transferencia', TransferFieldsSchema);