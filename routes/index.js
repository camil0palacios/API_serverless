const { Router } = require('express');
const router = Router();
const user = require('../controllers/user');
const point = require('../controllers/point');
// const admin = require('firebase-admin');
// const md5 = require('md5');
// var serviceAccount  = require('../db-prueba-serempre-firebase-adminsdk-vtuvz-9f1e3e0b97.json');

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://db-prueba-serempre-default-rtdb.firebaseio.com/"
// });

// const db = admin.database();

// router.post('/crearUsuario', (req, res) => {
//     const bdy = req.body;
//     const user = {
//         id: bdy.id,
//         name: bdy.name,
//         email: bdy.email,
//         password: md5(bdy.password)
//     };
//     db.ref('users/' + user.id).set(user);
//     res.send('Usuario creado');
// });

// router.put('/editarUsuario/:id', (req, res) => {
//     const id = req.params.id;
//     const userRef = db.ref('users').child(id);
//     let upd = req.body;
//     userRef.update(upd);
//     res.send('Usuario actualizado');
// });

// router.delete('/eliminarUsuario/:id', (req, res) => {
//     const id = req.params.id;
//     const userRef = db.ref('users').child(id);
//     userRef.remove()
//     res.send('Usuario Eliminado');
// });

// rutas de usuario
router.post('/crearUsuario', user.crearUsuario);
router.put('/editarUsuario/:id', user.editarUsuario);
router.delete('/eliminarUsuario/:id', user.eliminarUsuario);

// rutas de points
router.post('/crearPoint/:idUser', point.crearPoint);
router.put('/editarPoint/:idUser/:idPoint', point.editarPoint);
router.delete('/eliminarPoint/:idUser/:idPoint', point.eliminarPoint);

module.exports = router