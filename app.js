// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var cors       = require('cors');
var path       = require('path');

var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 3000;

/**
 * Database
 */
mongoose.connect('mongodb://localhost/hacks');


/**
 * Routing
 */
app.use(cors());
require('./app/routes/bots.js')(app);
require('./app/routes/callback.js')(app);



app.listen(port);
console.log('Running on port ' + port);

module.exports = app;
