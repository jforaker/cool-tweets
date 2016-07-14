/**
 * Created by jakeforaker on 7/13/16.
 */

var express = require('express');
var router = express.Router();
var errMsg = 'Error communicating with Twitter! Try again!';


function handleErr (err, res) {
    res.status(err.status || 500);
    res.json({
        message: err.message || errMsg,
        error: {}
    });
}

router.get('/statuses', function (req, res, next) {
    var twitter = req.app.get('Twitter');
    var query = req.query.q;
    twitter.search(query).then(function (data) {
        if (!data) {
            var err = new Error(errMsg);
            err.status = 404;
            return next(err);
        }
        return res.json(data);
    }, handleErr);
});

module.exports = router;
