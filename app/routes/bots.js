// Bots
// ---

module.exports = function(app) {
    var controller = require('../controllers/bot_controller.js');

    app.get('/api/bot', controller.index);
    app.get('/api/bot/:id', controller.show);
};
