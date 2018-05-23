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
                let listing = index + 1
                let t = tweets[index]
                let twit = {
                    Number: listing,
                    Account: t.user.screen_name,
                    Name: t.user.name,
                    Text: t.text,
                    Created: t.created_at,
                }
                allTweets.push(twit)
            })
            if (error) {reject(error)} 
            else {resolve(allTweets)} 
        })
    })
}

module.exports = getTweets