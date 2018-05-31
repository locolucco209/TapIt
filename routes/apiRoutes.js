const getTweets = require('../twitter/twitter.js')
const UserModel = require('../db/models/userModel')

module.exports = (app) => {

  app.get('/api/get_tweets', (req, res) => {
      getTweets()
      .then((results) => {
        res.send(JSON.stringify(results))
      })
    });

  app.get('/api/get_breweries', (req, res) => {
      getTweets()
      .then((results) => {
        res.send(JSON.stringify(results))
      })
    });

  app.post('/user_auth', (req, res) => {
    let cookie = req.body.data.cookie
    UserModel.auth(cookie)
    .then((response) => {
      res.send(response)
    })
  });

  app.post('/user_name', (req, res) => {
    let cookie = req.body.data.cookie
    UserModel.getInfo(cookie)
    .then((response) => {
      res.send(response)
    })
  });

  app.post('/logout', (req, res) => {
    let cookie = req.body.data.cookie
    UserModel.logout(cookie)
    .then((response) => {
      res.send(response)
    })
  });

  app.post('/delete_account', (req, res) => {
    let cookie = req.body.data.cookie
    UserModel.deleteAccount(cookie)
    .then((response) => {
      res.send(response)
    })
  });
  
  app.post('/api/sign_up_Go', (req, res) => {
    let accessToken = req.body.data.response.Zi.access_token
    let data = req.body.data.response
      res.cookie('tapIt_user' , accessToken).send('Cookie is set');
        UserModel.googleUser(data)
    });

  app.post('/api/sign_up_Fb', (req, res) => {
    let accessToken = req.body.data.response.accessToken
    let data = req.body.data.response
      res.cookie('tapIt_user' , accessToken).send('Cookie is set');
        UserModel.facebookUser(data)
    });

}