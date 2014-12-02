'use strict';

module.exports = function(app) {
    // Audio routing
    var audio = require('../../app/controllers/audio.server.controller');
    app.route('/audio/:video_id').get(audio.index);
};
