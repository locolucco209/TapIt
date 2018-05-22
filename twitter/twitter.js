require('dotenv').config();

let fs = require("fs");
let keys = require('./keys.js');
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);
let request = require('request');

let [node, path, command, ...value] = process.argv;

let getTweets = function() {
    logSearch();
    var params = {screen_name: 'TapItSD'};
    client.get('statuses/home_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (let i = 0; i < 3; i++) {
                let listing = i + 1
                let t = tweets[i]
                let twit = {
                    Number: listing,
                    Account: t.user.screen_name,
                    Name: t.user.name,
                    Text: t.text,
                    Created: t.created_at,
                }
                console.log(twit);
                logTwit(twit);
            }
        }
    })
}


let logSearch = function() {
    let c = process.argv[2]
    let search;
    if (process.argv.length === 3) {
        search = c;
        console.log(search);
    } else {
        let title = value.join(' ');
        search = c + " " + title;
    }
    fs.appendFile('./log.txt', '\n' + search + ', ', 'utf8', function(error) {
        if (error) {
            console.log(error)
            throw error;
        } else {
            console.log(`saved search '${search}' to seach log`);
        }
    })
}

let logTwit = function(output) {
    let result = `Result: ${output.number}, ${output.text}, ${output.created}, `;
    fs.appendFile('./log.txt', result, 'utf8', function(error) {
        if (error) {
            console.log(error)
            throw error;
        } else {
            console.log(`Saved!`);
        }
    })
}


if (command === 'my-tweets') {
    getTweets();
} 