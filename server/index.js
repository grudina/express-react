var app = require('../index');


app.set('port', 3000);

var server = app.listen(app.get('port'), function() {
    console.log('Server running at http://localhost:' + server.address().port);
});