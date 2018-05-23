const getTweets = require('../twitter/twitter.js')

module.exports = (app) => {

  app.get('/api/get_tweets', (req, res) => {
      getTweets()
      .then((results) => {
        res.send(JSON.stringify(results))
      })
    });
  
  app.post('/api/sign_up_Go', (req, res) => {
      let access_token = req.body.data.response.Zi.access_token
      res.set('Set-Cookie', [`Google_user=${access_token}`]);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('ok')
      // the cookies are there console.log('Cookies: ', req.cookies)
    });

  app.post('/api/sign_up_Fb', (req, res) => {
      let access_token = req.body.data.response.accessToken
      res.set('Set-Cookie', [`Facebook_user=${access_token}`]);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('ok')
    });

}