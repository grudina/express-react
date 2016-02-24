var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playlist');

module.exports = mongoose;