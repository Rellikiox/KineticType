'use strict';

var youtubeStream = require('youtube-audio-stream');

exports.index = function(req, res) {
    var requestUrl = 'http://youtube.com/watch?v=' + req.params.video_id;
    try {
        return youtubeStream(requestUrl).pipe(res);
    } catch(exception) {
        res.status(500).send(exception);
    }
};
