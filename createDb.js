var mongoose = require('server/libs/mongoose');
// mongoose.set('debug', true);
var async = require('async');


async.series([
    open,
    dropDatabase,
    requireModels,
    createUsers
], function(err, results) {
    console.log(arguments);
    mongoose.disconnect();
    process.exit(err ? 255 : 0);
});

function open(callback) {
    mongoose.connection.on('open', callback);
}

function dropDatabase(callback) {
    var db = mongoose.connection.db;
    db.dropDatabase(callback);
}

function requireModels(callback) {
    require('server/models/user');

    async.each(Object.keys(mongoose.models), function(modelName, callback) {
        mongoose.models[modelName].ensureIndexes(callback);
    }, callback);
}
function createUsers(callback) {

    var users = [
        {username: "Seva", password: "123"},
        {username: "Petya", password: "234"},
        {username: "Vasya", password: "312"}
    ];

    async.each(users, function(userData, callback) {
        var user = new mongoose.models.User(userData);
        user.save(callback);
    }, callback);
}


// var user = new User ({
//     username: "Tester2",
//     password: "secret"
// });
//
// user.save(function(err, user, affected) {
//     if(err) throw err;
//     console.log(arguments);
//
//     User.findOne({username: "Tester"}, function(err, tester) {
//         console.log(tester);
//     });
// });
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
//
// var schema = mongoose.Schema({
//     name: String,
//     surname: String
// });
//
// schema.methods.meow = function() {
//     console.log(this.get('name'));
//     console.log(this.get('surname'));
// };
//
// var Cat = mongoose.model('Cat', schema);
//
// var kitty = new Cat({
//     name: 'Zildjian',
//     surname: 'Cool'
// });
//
//
// kitty.save(function(err, kitty, affected){
//     kitty.meow();
// });

