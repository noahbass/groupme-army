/**
 * Bot Controller
 */

var Bot = require('../models/Bot');

// List all bots
exports.index = function(req, res) {
    Bot.find({}, function(err, result) {
        res.json(result);
    });
};

// Show one bot
exports.show = function(req, res) {
    Bot.findOne({ "_id": req.params.id }, function(err, result) {
        res.json(result);
    });
};

exports.create = function(req, res) {
    var bot = new Bot({

    });
};
