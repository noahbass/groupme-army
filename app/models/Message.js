var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

/**
 * Message Schema
 *
 */
var MessageSchema = new Schema({
    sender: {
        id: String,
        name: String
    },
    message: {
        id: String,
        text: String
    },
    response: String,

    updated_at: Date,
    created_at: Date
});

MessageSchema.pre('save', function(next){
    this.created_at = new Date();

    next();
});

MessageSchema.set('collection', 'message');

module.exports = mongoose.model('Message', MessageSchema);
