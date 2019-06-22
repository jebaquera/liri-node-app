// .env file contains my api keys that are hidden via gitignore file
require("dotenv").config();


// variables
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var request = require("request");
var liriReturn = process.argv[2];
var movieName = process.argv[3];
var twitter = require("twitter");
var client = newTwitter(keys.twitter);











Add the code required to import the `keys.js` file and store it in a variable.

js

  
* You should then be able to access your keys information like so

js
  var spotify = new Spotify(keys.spotify);


  // Included the axios npm package
var axios = require("axios");

// Grab the movieName which will always be the third node argument.
var movieName = process.argv[2];

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
    console.log(queryUrl);