const { response, request } = require('express');
const User = require('../models/user-bank');

const getUsers = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const postUser = async (req, res = response) => {

    const { rut, nombre, correo, telefono, banco, tipocuenta, ncuenta } = req.body;

    const usuario = new User({ rut, nombre, correo, telefono, banco, tipocuenta, ncuenta });

    const emailExist = await User.findOne({ correo });

    if (emailExist) {
        return res.status(400).json({
            msg: 'El correo ya está registrado'
        })
    }
    
    await usuario.save();

    res.json({
        msg: 'post API - usuariosPost',
        usuario
    });
}




module.exports = {
    getUsers,
    postUser
}