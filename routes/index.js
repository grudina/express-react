var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('Hello, World!');
});

router.get('/yo', function(req, res) {
    res.send('YOYOYOyooYOYOYYOYO!');
});

router.get('/api/search', function(req, res) {
    var result = req.query.inputVal;
    res.status = 200;
    //var res1 = result.match(/[a-zа-яё\s\.\@\=\/]+/gi);

    // check for not a number and not a symbols
    var reg1 = /[-\d+*()\/ )]+/g;
    var res1 = result.match(reg1) || [];
    if (res1[0] !== result) {
        res.send('invalid value');
        res.end();
        return false;
    }

    //check expression for value like number( or )number
    var reg2 = /(\d\()|(\)\d)/g;
    var res2 = result.match(reg2);
    console.log(res2);
    if (res2 !== null) {
        res.send('invalid syntaxis, like " numder"(" "');
        res.end();
        return false;
    }

    // check equal open quots to close quots
    var openQuots = 0;
    var closeQuots = 0;
    var arrResult = result.split('');
    for ( var i = 0; i < arrResult.length; i++) {
        if (arrResult[i] === '(') {
            openQuots++;
        }
        if (arrResult[i] === ')') {
            closeQuots++;
        }
    }
    if ( (openQuots - closeQuots) !== 0 ) {
        //res.send(500,);
        res.send('Wrong number of open and closе quots');
        res.end();
        return false;
    }

    var resultEval = eval(result);
    res.send('result = ' + resultEval);
});

router.get('/index', function (req, res) {
    res.render('index.jade', { title: 'Hey', message: 'Hello there!'});
});

router.get('/calc', function(req, res) {
    res.render('calculator.jade', {title: 'calculator', massage: 'Hello from Calculator'});
});

module.exports = router;