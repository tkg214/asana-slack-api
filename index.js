require('dotenv').load();

const express       = require('express');
const app           = express();
const bodyParser    = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

const slackRoute = require('./routes/slack')();
app.use('/slack', slackRoute);

app.listen(process.env.PORT, () => {
  console.log('App listening on port ' + process.env.PORT);
});
