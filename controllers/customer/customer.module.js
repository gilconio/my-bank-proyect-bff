const User = require('../../models/user-bank');
const { OutputMessage } = require("../../models/output-message.model");
const message = new OutputMessage();

const postCustomer = async (customer) => {

    try {
        const { rut, nombre, correo, telefono, banco, tipocuenta, ncuenta } = customer;

        const usuario = new User({ rut, nombre, correo, telefono, banco, tipocuenta, ncuenta });

        const emailExist = await User.findOne({ correo });

        if (emailExist) {
            return message.noContent();
        }

        await usuario.save();

        return message.success(usuario);

    } catch (error) {
        return message.internalServerError();
    }
}

module.exports = {
    postCustomer
}







