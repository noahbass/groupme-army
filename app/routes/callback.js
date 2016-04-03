/**
 * Callback
 *
 * Things that happen when groupme 'calls back' to the application
 */

module.exports = function(app) {
    var controller = require('../controllers/callback_controller.js');

    app.get('/api/callback/:id', controller.index); // id becomes available in req.params.id
    app.post('/api/callback/:id', controller.index);
};
