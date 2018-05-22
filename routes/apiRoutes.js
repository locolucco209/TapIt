module.exports = (app) => {

  app.get('/api/get_tweets', (req, res) => {
      res.send({name: 'Hello from apiRoutes.js'})
    });

  app.post('/api/sign_up', (req, res) => {
      console.log(req.body.data)
      res.send("Working from res.send")
    });

}