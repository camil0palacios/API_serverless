const md5 = require('md5');
const db = require('../database/database');
const controller = {}

controller.crearPoint = (req, res) => {
    const id = req.params.idUser;
    const bdy = req.body;
    const point = {
        id: bdy.id,
        quantity: bdy.quantity,
        reason: bdy.reason
    };
    db.ref(`users/${id}/points/${point.id}`).set(point);
    res.send('Point creado');
}

controller.editarPoint = (req, res) => {
    const idUser = req.params.idUser;
    const idPoint = req.params.idPoint;
    const pointRef = db.ref(`users/${idUser}/points`).child(idPoint);
    pointRef.update(req.body);
    res.send('Point actualizado');
}

controller.eliminarPoint = (req, res) => {
    const idUser = req.params.idUser;
    const idPoint = req.params.idPoint;
    const pointRef = db.ref(`users/${idUser}/points`).child(idPoint);
    pointRef.remove();
    res.send('Point Eliminado');
}

module.exports = controller;