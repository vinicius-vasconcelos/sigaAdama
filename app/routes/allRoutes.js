const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => res.render('index'));
routes.get('/game', (req, res) => res.render('game'));

module.exports = routes;