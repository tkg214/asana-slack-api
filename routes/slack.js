const slackRoute = require('express').Router();

module.exports = (db) => {

  slackRoute.post('/channel-messages', (req, res) => {
    const message = {
      channelId: req.body.channelId,
      channel: req.body.channel,
      userId: req.body.userId,
      user: req.body.user,
      text: req.body.text,
    };
    db.storeSlackMessage(message, () => {
      res.json({ status: 'Message posted' });
    });
  });

  slackRoute.get('/channel-messages', (req, res) => {
    db.fetchSlackMessages(results => {
      res.json(results);
    });
  });

  return slackRoute;
};
