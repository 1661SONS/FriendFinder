// requiring dependencies
var path = require('path');

// import friends data
var friends = require('../data/friends.js');

// routes
module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        var surveyInput = req.body;
        var answers = surveyInput.scores;

        var matchName = '';
        var matchPhoto = '';

        var diffTotal = 1000;
        
        for (var i = 0; i < friends.length; i++) {
            var diff = 0;
            
            for (var j = 0; j < answers.length; j++) {
                diff += Math.abs(friends[i].scores[j] - answers[j]);
            };

            if (diff < diffTotal) {
                diffTotal = diff;
                matchName = friends[i].name;
                matchPhoto = friends[i].photo;
            }
        };

        friends.push(surveyInput);

        res.json({ status: `Here's your scrub free match:`, matchName: matchName, matchPhoto: matchPhoto });

    });
        
};