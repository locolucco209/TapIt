const getTweets = require('../twitter/twitter.js')
const UserModel = require('../db/models/userModel')

module.exports = (app) => {

  app.get('/api/get_tweets', (req, res) => {
      getTweets()
      .then((results) => {
        res.send(JSON.stringify(results))
      })
    });
  
  app.post('/api/sign_up_Go', (req, res) => {
    let accessToken = req.body.data.response.Zi.access_token
    let data = req.body.data.response
      res.set('Set-Cookie', [`tapIt_user=${accessToken}`]);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('ok')
        UserModel.googleUser(data)
    });

  app.post('/api/sign_up_Fb', (req, res) => {
    let accessToken = req.body.data.response.accessToken
    let data = req.body.data.response
      res.set('Set-Cookie', [`tapIt_user=${accessToken}`]);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('ok')
        UserModel.facebookUser(data)
    });

}