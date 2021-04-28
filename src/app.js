const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const routes = require('../routes/index');
const port = 3000 || process.env.PORT;

app.set('PORT', port);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// routes
app.use('/api', routes);

module.exports = app;