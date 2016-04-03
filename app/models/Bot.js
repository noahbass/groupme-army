// Bot model
// ---

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

/**
 * Bot Schema
 *
 */
var BotSchema = new Schema({
    groupme_id: String,
    keyword: String,
    response: String,

    updated_at: Date,
    created_at: Date
});

BotSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;

    if(!this.created_at ) {
        this.created_at = now;
    }

    next();
});

BotSchema.set('collection', 'bot');

module.exports = mongoose.model('Bot', BotSchema);
