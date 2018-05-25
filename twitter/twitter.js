require('dotenv').config();

let fs = require("fs");
let keys = require('./keys.js');
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
let request = require('request');

const getTweets = (results) => {
    return new Promise((resolve, reject) => {
        client.get('statuses/home_timeline', {screen_name: 'TapItSD'}, function(error, tweets, response) {
            let allTweets = []
            tweets.map((item, index) => {
              allTweets.push({id: tweets[index].id_str})
            })
              if (error) {reject(error)} 
              else {resolve(allTweets)} 
        })
    })
}

module.exports = getTweets