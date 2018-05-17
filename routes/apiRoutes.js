module.exports = (app) => {

    app.get('/api/get_tweets', (req, res) => {
        res.send({name: 'Hello'})
      });

  }