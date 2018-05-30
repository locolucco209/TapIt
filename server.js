const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080
const path = require('path');
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

require('./routes/htmlRoutes.js')(app)
require('./routes/apiRoutes.js')(app)

app.listen(PORT);
console.log(`Listening on port ${PORT}`)