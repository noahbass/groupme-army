/**
 * respond
 *
 * see if the message matches the keyword in any form,
 * if so, then call for the message to get posted to the chat
 * */

var director = require('director');
var PostMessage = require('../lib/postMessage');

function respond(bot_id, message_text, keyword, message_response) {
    var botRegex = keyword; //var botRegex = /What are (we|you) doing/i;

    if(message_text && botRegex.test(message_text)) {
        PostMessage.postMessage(bot_id, message_response);
    } else {
        console.log('not a valid message to respond to');
    }
}

exports.respond = respond;
