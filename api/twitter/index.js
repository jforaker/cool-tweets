/**
 * Created by jakeforaker on 7/13/16.
 */

var Twit = require('twit');

function Twitter(keys) {
    this.keys = keys;
    this.reader = {};
    this.init();
}

Twitter.prototype.init = function () {
    this.reader = new Twit(this.keys);
};

Twitter.prototype.stream = function (filter) {
    //TODO... not implemented yet
    var stream = this.reader.stream('statuses/filter', {track: filter});
    stream.on('tweet', function (tweet) {
        console.log(tweet)
    });
};

Twitter.prototype.search = function (query) {
    return this.reader
        .get('search/tweets', { q: query, count: 20 })
        .catch(function (err) {
            console.log('caught error', err.stack);
            return err;
        })
        .then(function (result) {
            return result.data;
        })
};


module.exports = Twitter;
