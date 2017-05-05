const slackRoute = require('express').Router();

module.exports = () => {

  slackRoute.post('/channel-messages', (req, res) => {
    const user = req.body.user;
    const text = req.body.text;
    const channel = req.body.channel;
    const timestamp = req.body.timestamp;
    console.log('Test message: ' + text);
    res.json({ status: 'Message posted' });
  });

  slackRoute.get('/channel-messages', (req, res) => {
    res.sendStatus(200);
  });

  slackRoute.post('/message-post', (req, res) => {
    const message = req.body.message;
    console.log('Test message: ' + message);
    res.json({ status: 'Message posted' });
  });

  return slackRoute;
};
