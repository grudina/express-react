var User = require('server/models/user').User;

var user = new User ({
    username: "Tester2",
    password: "secret"
});

user.save(function(err, user, affected) {
    if(err) throw err;
    console.log(arguments);
    
    User.findOne({username: "Tester"}, function(err, tester) {
        console.log(tester);
    });
});
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

