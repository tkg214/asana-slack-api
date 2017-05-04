const slackRoute = require('express').Router();

module.exports = () => {

  slackRoute.post('/channel-messages', (req, res) => {
    console.log(req.body)
  });

  return slackRoute;
};
