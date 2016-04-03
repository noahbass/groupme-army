/**
 * Callback Controller
 */

var Bot = require('../models/Bot');
var Message = require('../models/Message');
var Respond = require('../../lib/respond');

/**
 * Index
 *
 * Add the message in the database if it meet the criteria and
 * sends a reply
 */
exports.index = function(req, res) {
    console.log(new Date(), req.params.id);

    var response = "Hi there!";
    var bot_id = req.params.id; // id within the application, not groupme
    var message_text = req.body.text;
    var message_id = req.body.id;
    var sender_id = req.body.sender_id;
    var sender_name = req.body.name;
    var sender_type = req.body.sender_type;
    var groupme_id;

    // find the bot in the database by id
    // 57007e956771e5de8caed650
    Bot.findOne({ "_id": bot_id }, function(err, result) {
        groupme_id = result.groupme_id;

        if(result && sender_type != 'bot') {
            // see if the message content matches the keyword,
            // if so, reply with the designated message with that bot
            Respond.respond(groupme_id, message_text, /test/i, response); // req, message_text, bot_id, keyword, message_response

            var message = Message();
            message.sender.id = sender_id;
            message.sender.name = sender_name;
            message.message.id = message_id;
            message.message.name = message_text;
            message.response = response;
            message.save();
        }
    });
};
