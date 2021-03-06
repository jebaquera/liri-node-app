# LIRI BOT
LIRI Bot homework project using node js and axios.

## Overview of the App

In this assignment, we created LIRI. LIRI is 

The problem we were faced was to create an app that functioned like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, the solution should use a _Language_ Interpretation and Recognition Interface (LIRI). 

## Solution
LIRI will be a command line node app that takes in user parameters and returns data from specific api's. 

The solution was to use "backend" technologies. Node.js was used along with NPM (Node Package Manager) libraries. Since this app works via command line inputs, there is no front end component or html page to publish.

## Technologies Used

• Node.js
• JavaScript
• File System library
• NPM libraries:
<br />
  -- dateformat v3.0.3,
  -- dotenv v8.0.0,
  -- node-spotify-api v1.1.1,
  -- request v2.88.0

## Using LIRI

<img src="./images/concert-this.png" />
<hr>

### `concert-this`
`node liri.js concert-this <artist/band name here>`

  * This will search the Bands in Town Artist Events API for an artist and render the following information about each event in the `terminal` and to the `log.txt` file:
    * Name of the venue
    * Venue location
    * Date of the Event
<br /><br />
<img src="./images/spotify-this-song.png" />
<hr>

### `spotify-this-song`
`node liri.js spotify-this-song '<song name here>'`
-- If no song is provided then the program will default to "The Sign" by Ace of Base.

  * This will search the Spotify API for a song name/title and render the following information about the song in the `terminal` and to the `log.txt` file:
    * Artist(s)
    * The song's name
    * The album that the song is from
    * A preview link of the song from Spotify
<br /><br />
<img src="./images/movie-this.png" />
<hr>

### `movie-this`
`node liri.js movie-this '<movie name here>'`
-- If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

  * This will search the OMDB API for a movie name and render the following information about the movie in the `terminal` and to the `log.txt` file:
    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.
<br /><br />
<img src="./images/do-what-it-says.png" />
<hr>

### `do-what-it-says`
`node liri.js do-what-it-says`

  * LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
<br /><br />
<img src="./images/default-if-not-sure.png">
<hr>

### User Message
If the user enters something other than what is expected that the program does not understand, it will let the user that it didn't understand the parameters and asks them to try again. It will return, "I did not understand what you were trying to do, try again."
