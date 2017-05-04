const slackRoute = require('express').Router();

module.exports = () => {

  slackRoute.post('/channel-messages', (req, res) => {
    const user = req.body.user;
    const message = req.body.message;
    console.log('Test message: ' + message);
    res.json({ status: 'Message posted' });
  });

  slackRoute.get('/channel-messages', (req, res) => {
    res.sendStatus(200);
  });

  return slackRoute;
};
