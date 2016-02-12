var express = require('express');
var app = express();
var path = require('path');

var routes = require('./routes/index')

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

module.exports = app;

