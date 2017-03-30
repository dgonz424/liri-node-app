var fs = require('fs');
var keys = require('./keys.js');
var command = process.argv[2];

//referencing https://www.npmjs.com/package/twitter

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  access_token_key: keys.access_token_key,
  access_token_secret: keys.access_token_secret
});
 
var params = {screen_name: 'dgonz424'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error && command=='my-tweets') {
    //whenever I tried to narrow down the output to just the screen name and time created at, the code broke
    //i was referring to the example response here: https://dev.twitter.com/rest/reference/get/statuses/user_timeline
    // console.log('\n' + '@' + params.screen_name + ' tweeted ' + tweets.text + ' at ' + tweets.created_at +'\n');
    console.log(tweets)
  }
});
  
// var spotifyApi = require('spotify');
 
// spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
 
//     // Do something with 'data' 
// });

// var requestApi = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred 
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
//   console.log('body:', body); // Print the HTML for the Google homepage. 
// });