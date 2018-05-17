const path = require('path');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.sendFile(path.join( __dirname, 'build'));
      });

      app.get('/add_user', (req, res) => {
        res.sendFile(path.join( __dirname, 'build'));
      });

      app.get('/claim_brewery', (req, res) => {
        res.sendFile(path.join( __dirname, 'build'));
      });

      app.get('/social_login', (req, res) => {
        res.sendFile(path.join( __dirname, 'build'));
      });

      app.get('/age_gate', (req, res) => {
        res.sendFile(path.join( __dirname, 'build'));
      });
 
  }