const User = require('../models/user-bank');

const existEmail = async (correo = '') => {
    const emailExist = await User.findOne({ correo });

    if (emailExist) {
        throw new Error(`El correo: ${correo} ya esta registrado`);
    }
}

module.exports = {
    existEmail
}