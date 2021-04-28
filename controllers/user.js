const md5 = require('md5');
const db = require('../database/database');
const controller = {}

controller.crearUsuario = (req, res) => {
    const bdy = req.body;
    const user = {
        id: bdy.id,
        name: bdy.name,
        email: bdy.email,
        password: md5(bdy.password)
    };
    db.ref('users/' + user.id).set(user);
    res.send('Usuario creado');
}

controller.editarUsuario = (req, res) => {
    const id = req.params.id;
    const userRef = db.ref('users').child(id);
    userRef.update(req.body);
    res.send('Usuario actualizado');
}

controller.eliminarUsuario = (req, res) => {
    const id = req.params.id;
    const userRef = db.ref('users').child(id);
    userRef.remove()
    res.send('Usuario Eliminado');
}

module.exports = controller;