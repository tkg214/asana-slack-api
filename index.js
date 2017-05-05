require('dotenv').load();

const ENV           = process.env.NODE_ENV || 'development';
const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');
const knexConfig    = require('./knexfile');
const knex          = require('knex')(knexConfig[ENV]);
const db            = require('./utils/dbFunctions');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Only use knex logger in development
if (ENV === 'development') {
  const knexLogger = require('knex-logger');
  app.use(knexLogger(knex));
}

// API endpoint routing below
const slackRoute = require('./routes/slack')();
app.use('/slack', slackRoute);

app.listen(process.env.PORT, () => {
  console.log('App listening on port ' + process.env.PORT);
});
