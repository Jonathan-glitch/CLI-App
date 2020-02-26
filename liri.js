require("dotenv").config();

var Spotify = require('node-spotify-api');

var keys = require("./keys");

var spotify = new Spotify(keys.spotify);
 
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });

// // Bands in town
//   function searchBandsInTown(artist) {

//     // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
//     var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {

//       // Printing the entire object to console
//       console.log(response);

//       // Constructing HTML containing the artist information
//       var artistName = $("<h1>").text(response.name);
//       var artistURL = $("<a>").attr("href", response.url).append(artistName);
//       var artistImage = $("<img>").attr("src", response.thumb_url);
//       var trackerCount = $("<h2>").text(response.tracker_count + " fans tracking this artist");
//       var upcomingEvents = $("<h2>").text(response.upcoming_event_count + " upcoming events");
//       var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");

//       // Empty the contents of the artist-div, append the new artist content
//       $("#artist-div").empty();
//       $("#artist-div").append(artistURL, artistImage, trackerCount, upcomingEvents, goToArtist);
//     });
//   }

//   // Event handler for user clicking the select-artist button
//   $("#select-artist").on("click", function(event) {
//     // Preventing the button from trying to submit the form
//     event.preventDefault();
//     // Storing the artist name
//     var inputArtist = $("#artist-input").val().trim();

//     // Running the searchBandsInTown function(passing in the artist as an argument)
//     searchBandsInTown(inputArtist);
//   });
