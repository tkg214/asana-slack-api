const slackRoute = require('express').Router();

module.exports = () => {

  slackRoute.post('/channel-messages', (req, res) => {
    console.log(req.body);
    res.sendStatus(201);
  });

  slackRoute.get('/channel-messages', (req, res) => {
    res.sendStatus(200);
  });

  return slackRoute;
};
