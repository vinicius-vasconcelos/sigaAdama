const application = require('../../config/server');

module.exports = application.get('/', (req, res) => res.render('index'));