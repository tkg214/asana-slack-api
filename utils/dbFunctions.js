'use strict';

const ENV           = process.env.NODE_ENV || 'development';
const knexConfig    = require('../knexfile');
const knex          = require('knex')(knexConfig[ENV]);

module.exports = {

  storeSlackMessage: (message, done) => {
    knex('slack_users').where('user_id', message.userId).then(user => {
      if (user.length === 0) {
        knex('slack_users').insert({
          user_id: message.userId,
          slack_user: message.user
        }).then(() => {
          return;
        });
      }
      knex('slack_channels').where('channel_id', message.channelId).then(channel => {
        if (channel.length === 0) {
          knex('slack_channels').insert({
            channel_id: message.channelId,
            slack_channel: message.channel
          }).returning('channel_id').then(() => {
            knex('slack_messages').insert({
              slack_user_id: message.userId,
              slack_channel_id: message.channelId,
              text: message.text
            }).then(done);
          });
        } else {
          knex('slack_messages').insert({
            slack_user_id: message.userId,
            slack_channel_id: message.channelId,
            text: message.text
          }).then(done);
        }
      });
    });
  },

  fetchSlackMessages: (done) => {
    knex('slack_messages').where('fetched', '=', false).update({ fetched: true }).returning('*').then(done);
  }
};
