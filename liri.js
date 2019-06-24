// .env file contains my api keys that are hidden via gitignore file
require("dotenv").config();


// variables
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var request = require("request");
var liriReturn = process.argv[3];
var movieName = process.argv[2];


// The switch-case will direct which function gets run.
switch (liriReturn) {
  case "concert-this":
    concertThis();
    break;
  
  case "spotify-this-song":
    spotifyThisSong();
    break;
  
  case "movie-this":
    movieThis();
    break;
  
  case "do-what-it-says":
    doWhatItSays();
    break;
  }


// One - concertThis
function concertThis () {
  
    // using the movieName variable from our list
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    request 



}

















  // Included the axios npm package
var axios = require("axios");

// Grab the movieName which will always be the third node argument.
var movieName = process.argv[2];

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
    console.log(queryUrl);



