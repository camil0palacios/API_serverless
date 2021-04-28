const admin = require('firebase-admin');
const serviceAccount  = require('./db-prueba-serempre-firebase-adminsdk-vtuvz-9f1e3e0b97.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://db-prueba-serempre-default-rtdb.firebaseio.com/"
});

const db = admin.database();

module.exports = db;