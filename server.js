var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var config = require('./app/config/config');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'applicatipon/vnd.api+json'}));
app.use(methodOverride());

require('./app/controllers/router')(app);

var db = mongoose.connect(config.db);

mongoose.connection.on('connected', function(){
  console.log('Mongoose default connection open to ' + config.db);
});

app.listen(config.port);
console.log("App listening on port"+ config.port);
