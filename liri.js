
var keys = require("./keys.js");
require("./.env");





var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: "235e29ce984841838b53fd8d781f7905",
    secret: "267b3ab016ef429a9d15c2c9760bfa77"
});

spotify.search({ type: 'track', query: 'I want it that way' }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});