
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('slack_messages', (t) => {
      t.integer('slack_user_id').references('user_id').inTable('slack_users');
      t.integer('slack_channel_id').references('channel_id').inTable('slack_channels');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('slack_messages', (t) => {
      t.dropColumn('slack_user_id');
      t.dropColumn('slack_channel_id');
    })
  ]);
};
