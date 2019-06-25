// .env file contains my api keys that are hidden via gitignore file
require("dotenv").config();

// variables
  var keys = require("./keys.js");
  var fs = require("fs");
  var Spotify = require("node-spotify-api");
  var request = require("request");
  var dateFormat = require("dateFormat")




// One - concertThis
// Takes artist input and searches the Bandsintown API
var concertThis = function(artist) {
    var region = "";
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist.replace(" ", "+") + "/events?app_id=codingbootcamp";
    // console.log (queryUrl);

    request(queryUrl, function(error, response, body) {
      // if request is successful
      if (!error && response.statusCode === 200) {
        // save parsed body in a new var
        var concertInfo = JSON.parse(body)
      
        outputData(artist + " concert information:")

        for (i = 0; i < concertInfo.length; i++) {
                
          region = concertInfo[i].venue.region
          //handle Canadian venues
          if (region === "") {
            region = concertInfo[i].venue.country
          }

          // Need to return Name of venue, Venue location, Date of event (MM/DD/YYYY)
          outputData("Venue: " + concertInfo[i].venue.name)
          outputData("Location: " + concertInfo[i].venue.city + ", " + region);
          outputData("Date: " + dateFormat(concertInfo[i].datetime, "mm/dd/yyyy"))
        }
      }
    })
}

// Two - spotifyThisSong
// Takes user song input and searches Spotify for information to return to user
var spotifyThisSong = function(song) {
  // If no song is provided then the program will default to "The Sign" by Ace of Base
  if (!song) {
    song = "The Sign Ace of Base"
  }

  var spotify = new Spotify(keys.spotify);

  spotify.search({type: "track", query: song, limit: 1}, function (error, data){
    if (error) {
        return console.log(error)
    }

    // Output Artist(s), Song Name, Album, Preview link of song
    var songInfo = data.tracks.items[0]
    outputData(songInfo.artists[0].name)
    outputData(songInfo.name)
    outputData(songInfo.album.name)
    outputData(songInfo.preview_url)
  })
}

// Three - movieThis
// Run a request using OMDB API and user input
var movieThis = function(movie) {
  // If the user doesn't type in a movie, the program will output data for the movie 'Mr. Nobody.'
  if (!movie){
    movie = "Mr.+Nobody"
  }

  var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
  // console.log(query.url);

  request(queryUrl, function (error, response, body) {
    // if request is successful
    if (!error && response.statusCode === 200) {
      // pull data in readable format. Need to output: Title, Year, IMDB Rating, Rotten Tomatoes Rating, Origin Country, Language, Plot, Actors
      var movieData = JSON.parse(body);

      outputData("Title: " + movieData.Title)
      outputData("Year: " + movieData.Year)
      outputData("IMDB Rating: " + movieData.imdbRating)
      outputData("Rotten Tomatoes Rating: " + movieData.Ratings[1].Value)
      outputData("Origin Country: " + movieData.Country)
      outputData("Language: " + movieData.Language)
      outputData("Plot: " + movieData.Plot)
      outputData("Actors: " + movieData.Actors)
    }
  })
}

// Four - doWhatItSays
// Use fs package to read random.txt file
var doWhatItSays = function(){

  // read from file
  fs.readFile("random.txt", "utf8", function (error, data) {
      if(error){
          return console.log(error)
      }
      
      var dataArr = data.split(",")

      // call function and pass argument
      runAction(dataArr[0], dataArr[1])
  });
}

// Function to output to console log and write to a log file
// This function will handle outputting to the console and writing to log file
var outputData = function(data) {
  console.log(data)

  fs.appendFile("log.txt", "\r\n" + data, function (error){
      if(error){
          return console.log(error)
      } 
  })
}


// The switch-case will direct which function gets run.
var runAction = function(func, parm) {
  switch (func) {
    case "concert-this":
      concertThis(parm);
      break;
  
    case "spotify-this-song":
      spotifyThisSong(parm);
      break;
  
    case "movie-this":
      movieThis(parm);
      break;
  
    case "do-what-it-says":
      doWhatItSays();
      break;

    default:
      outputData("I did not understand what you were trying to do, try again.")
  }
}

runAction(process.argv[2], process.argv[3])