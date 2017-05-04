const slackRoute = require('express').Router();

module.exports = () => {

  slackRoute.post('/channel-messages', (req, res) => {
    res.json({ message: 'Message posted' });
  });

  slackRoute.get('/channel-messages', (req, res) => {
    res.sendStatus(200);
  });

  return slackRoute;
};
