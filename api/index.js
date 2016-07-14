/**
 * Created by jakeforaker on 7/13/16.
 */

var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var cors = require('cors');
var app = express();
var routes = require('./routes/index');
var Twitter = require('./twitter');
var keys = {
    //normally we'd put these in environment variables such as process.env.TWITTER_CONSUMER_KEY etc...
    consumer_key: 'VJLAK7aY8BUsY37EkW8lO0YGr',
    consumer_secret: 'ifYVohyZK4uDDGbwe2AM7ZQE0eJXP12enTZzColfnmyNtN3TwU',
    access_token: '218011337-lSRAbDX29ByRFBhq0bosD3sajnFfhW3calIkejtY',
    access_token_secret: 'J4BcOTPZzWaXXK93ntSerdOE6racRwtcnacP8FuJ33uSk',
    timeout_ms: 60 * 1000  // optional HTTP request timeout to apply to all requests.
};

app.server = http.createServer(app);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// our routes will be contained in routes/index.js
app.use('/api', routes);
// production error handler, no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});
//Make the Twitter class available app-wide via req.app.get('Twitter')
app.set('Twitter', new Twitter(keys));

app.server.listen(port, function () {
    console.log('Started on port ' + app.server.address().port);
});

module.exports = app;
