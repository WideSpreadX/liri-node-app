
require("dotenv").config();
const keys = require("./keys.js");
const fs = require("fs");
const axios = require("axios");
const moment = require("moment");

let userInput = process.argv.slice(2, 3).join("");
let userSearch = process.argv.slice(3).join(" ");

//The switch statement to pick the correct function
function siri() {
    switch (userInput) {
        case "concert-this":
            concert();
            break;
        case "spotify-this-song":
            spotify();
            break;
        case "movie-this":
            movie();
            break;
        case "do-what-it-says":
            doIt();
            break;
        default:
            break;
    }
};

siri();
//Functions

function spotify() {
    //use keys variable to get spotify id and secret from keys.js
    var Spotify = require('node-spotify-api');

    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: userSearch }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        fs.appendFile("log.txt", data.tracks.items[0].name + "\n", function (err) { });
        fs.appendFile("log.txt", data.tracks.items[0].preview_url + "\n", function (err) { });
        fs.appendFile("log.txt", data.tracks.items[0].album.artists[0].name + "\n", function (err) { });
        fs.appendFile("log.txt", data.tracks.items[0].album.name + "\n \n", function (err) { });
    });

}

function movie() {
    if (userSearch === "") {
        userSearch = "Mr. Nobody";
        console.log(movie);
    }
    axios.get("http://www.omdbapi.com/?t=" + userSearch + "&y=&plot=short&apikey=trilogy").then(function (request) {

        fs.appendFile("log.txt", request.data.Title + "\n", function (err) { });
        fs.appendFile("log.txt", request.data.Year + "\n", function (err) { });
        fs.appendFile("log.txt", request.data.Rated + "\n", function (err) { });
        fs.appendFile("log.txt", request.data.Ratings[1] + "\n", function (err) { });
        fs.appendFile("log.txt", request.data.Country + "\n", function (err) { });
        fs.appendFile("log.txt", request.data.Language + "\n", function (err) { });
        fs.appendFile("log.txt", request.data.Plot + "\n", function (err) { });
        fs.appendFile("log.txt", request.data.Actors + "\n \n", function (err) { });


    })

}

function concert() {
    axios.get("https://rest.bandsintown.com/artists/"
        + userSearch + "/events?app_id=codingbootcamp").then(function (request) {
            fs.appendFile("log.txt", request.data[0].venue.name + "\n", function (err) { });
            fs.appendFile("log.txt", request.data[0].venue.city + "\n", function (err) { });
            fs.appendFile("log.txt", request.data[0].venue.region + "\n \n", function (err) { });
            fs.appendFile("log.txt", moment(request.data[0].datetime).format('MMMM Do YYYY, h:mm a') + "\nBe there or be square!", function (err) { });

        });
}

function doIt() {

    fs.readFile("./random.txt", function (err, data) {
        let dataString = data.toString();
        userInput = dataString.split(" ").slice(0, 1).join("");
        userSearch = dataString.split(" ").slice(1).join(" ");
        siri();
        fs.appendFile("log.txt", data + "\n \n", function (err) { });
    });
}