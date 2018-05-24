const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 's3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'qab8kivc59in8u1a',
  password : process.env.JAWSDB_SECRET,
  database : 'y8g491yonwvmkwb9'
});
 
module.exports = connection;