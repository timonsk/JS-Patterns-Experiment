
'use strict';

var express = require('express');
var router = express.Router();
var Greetings = require('../OOJS/simpleGreetings.js');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: "Patterns Exp" });
});

router.get('/getGreetings', function (req, res, next) {
    var say =  new Greetings();
    say.constructor("Hello my name is Dmytro!");
    res.send({
        answer: say.getGreetings()
    });
});

module.exports = router;