const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => res.render('index'));
routes.get('/teste', (req, res) => res.send('index'));

module.exports = routes;